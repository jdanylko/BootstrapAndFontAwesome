

$(function () {

    /**
     * Processing Text box
     */
    $("#SearchTerm").on("keyup keypress",

        function (e) {
            var active = $(".active", ".suggestions");

            if (e.which === 27) {
                $(".suggestions").attr("hidden","hidden");
            }
            else if (e.which === 40) // Down Arrow
            {
                if (active.length > 0) {
                    var next = $(active).next();
                    $(active).removeClass("active");
                    $(next).addClass("active");
                } else {
                    $("a:first", ".suggestions").addClass("active");
                }
            }
            else if (e.which === 38) // Up Arrow
            {
                if (active.length > 0) {
                    var previous = $(active).prev();
                    $(active).removeClass("active");
                    $(previous).addClass("active");
                } else {
                    $("a:last", ".suggestions").addClass("active");
                }
            }
            else if (e.which === 13) // Enter
            {
                e.preventDefault();
                $(this).val($(active).text());
                $(".suggestions").attr("hidden", "hidden");

                return false;
            }
            else
            {
                // We have a good value w/ no special keys.
                var value = $("#SearchTerm").val();
                if (value === "") {
                    $(".suggestions").attr("hidden","hidden");
                } else {
                    var uri = "/api/Car";
                    $(".suggestions").removeAttr("hidden");

                    // spinner
                    $("i", ".search-icon")
                        .removeClass("fa-search")
                        .addClass("fa-spinner fa-pulse");

                    $.getJSON(uri)
                        .done(function (data) {

                            // Deliberate timer to show spinner.
                            setTimeout(function () {

                                    $("i", ".search-icon")
                                        .removeClass("fa-spinner")
                                        .removeClass("fa-pulse")
                                        .addClass("fa-search");

                                    var list = $(".suggestions");
                                    $(list).empty();
                                    $.each(data,
                                        function(key, value) {
                                            var anchor = "<a class='dropdown-item' href='#'>" + value + "</a>";

                                            $(list).append(anchor);

                                            // On mouse click, set the value.
                                            $("a", list).on("click",
                                                function(e) {
                                                    e.preventDefault();
                                                    var selected = $(this).text();
                                                    $("#SearchTerm").val(selected);
                                                    $(".suggestions").attr("hidden", "hidden");
                                                });
                                        });

                                    $(list).removeAttr("hidden").show();

                                },
                                3000);

                        });
                }
            }
        });

        // Loading Modal Dialog Box
        $('#exampleModal').on('show.bs.modal', function (e) {
            var overlay = $(".overlay");
            // hide the overlay after 3 seconds.
            setTimeout(function () {
                $(overlay).hide();
            }, 3000)
        })

})