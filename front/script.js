const countries = [];

// This function will fetch API:
async function getAllCountries() {
    const res = await $.ajax({
        url: "https://restcountries.com/v3.1/all",
        success: function (data) {
            data.forEach((country) => {
                // console.log(country);
                if (country.capital === undefined) {
                    $("#countries-list").append(
                        `<li><span>${country.name.common}<span>, ${country.continents}, ${country.flag}</li>`
                    );
                } else {
                    $("#countries-list").append(
                        `<li><span>${country.name.common}<span>, ${country.capital}, ${country.continents}, ${country.flag}</li>`
                    );
                }
                countries.push({
                    names: `${country.name.common}`,
                    capitales: `${country.capital}`,
                    continents: `${country.continents}`,
                    flags: `${country.flag}`,
                });
            });
            // console.log(countries)
        },
    });
    return res;
};

// Making sure the getAllCountries function is fetched
// before anything else with the async procedure:
async function startProgram() {
	const countries = await getAllCountries();
	console.log("Ready to start");
};
// --> First function called:
startProgram();


// Here is my interactive button #btnShowData,
// It will show the list of countries when clicked:
$("#btnShowData").click(function () {
    const list = $("#countries-list");
    if (list.is(":visible")) {
        list.hide();
    } else {
        list.show();
    };
});

// Form button, shows the country the user searched for:
$("#searchBtn").click(function () {
    let userEntry = $("#searchInput").val();
    if ($('input[name=radioSearch]:checked').val() === "country") {
        countries.forEach((el) => {
            if (el.names === userEntry) {
                $("#country").html(el.names);
                $("#capital").html(el.capitales);
                $("#continent").html(el.continents);
                $("#flag").html(el.flags);
            };
        });
    } else if ($('input[name=radioSearch]:checked').val() === "capital") {
        countries.forEach((el) => {
            if (el.capitales === userEntry) {
                $("#country").html(el.names);
                $("#capital").html(el.capitales);
                $("#continent").html(el.continents);
                $("#flag").html(el.flags);
            };
        });
    } else {
        return console.log("missing radio input");
    };
});