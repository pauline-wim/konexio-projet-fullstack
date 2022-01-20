const countries = [];
const subregions = [];

// This function will fetch API:
async function getAllCountries() {
    const res = await $.ajax({
        url: "https://restcountries.com/v3.1/all",
        success: function (data) {
            data.forEach((country) => {
                // console.log(country);
                if (country.capital === undefined) {
                    $("#countries-list").append(
                        `<li><span>${country.name.common}</span>, ${country.continents}, ${country.flag}</li>`
                    );
                } else {
                    $("#countries-list").append(
                        `<li><span>${country.name.common}</span>, ${country.capital}, ${country.continents}, ${country.flag}</li>`
                    );
                }
                countries.push({
                    names: `${country.name.common}`,
                    capitales: `${country.capital}`,
                    continents: `${country.continents}`,
                    flags: `${country.flag}`,
                    regions: `${country.region}`,
                });
                subregions.push({
                    regions: `${country.region}`,
                    names: `${country.name.common}`,
                });
            });
            // console.log(subregions);
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
        $(".radioNotChecked").hide();
        $("#hiddenRegions").hide();
        $("#regionResult").hide();
        countries.forEach((el) => {
            if (el.names === userEntry) {
                $("#country").html(el.names);
                $("#capital").html(el.capitales);
                $("#continent").html(el.continents);
                $("#flag").html(el.flags);
            };
        });
    } else if ($('input[name=radioSearch]:checked').val() === "capital") {
        $(".radioNotChecked").hide();
        $("#hiddenRegions").hide();
        $("#regionResult").hide();
        countries.forEach((el) => {
            if (el.capitales === userEntry) {
                $("#country").html(el.names);
                $("#capital").html(el.capitales);
                $("#continent").html(el.continents);
                $("#flag").html(el.flags);
            };
        });
    } else {
            $(".radioNotChecked").show();
            return console.log("missing radio input");
    };
});

// Subregions search:

$("#subregionSearch").click(function () {
    $("#hiddenRegions").show();
    $("#regionResult").show();
    console.log("show subregions")
    $("#Africa").click(function () {
        console.log("Africa");
        subregions.forEach((el) => {
            if (el.regions === "Africa") {
                $("#regionResult").append(`<li>${el.names}</li>`);
            };
        });
    });
    $("#Americas").click(function () {
        console.log("Americas");
        subregions.forEach((el) => {
            if (el.regions === "Americas") {
                $("#regionResult").append(`<li>${el.names}</li>`);
            };
        });
    });
    $("#Antartic").click(function () {
        console.log("Antartic");
        subregions.forEach((el) => {
            if (el.regions === "Antartic") {
                $("#regionResult").append(`<li>${el.names}</li>`);
            };
        });
    });
    $("#Asia").click(function () {
        console.log("Asia");
        subregions.forEach((el) => {
            if (el.regions === "Asia") {
                $("#regionResult").append(`<li>${el.names}</li>`);
            };
        });
    });
    $("#Europe").click(function () {
        console.log("Europe");
        subregions.forEach((el) => {
            if (el.regions === "Europe") {
                $("#regionResult").append(`<li>${el.names}</li>`);
            };
        });
    });
    $("#Oceania").click(function () {
        console.log("Oceania");
        subregions.forEach((el) => {
            if (el.regions === "Oceania") {
                $("#regionResult").append(`<li>${el.names}</li>`);
            };
        });
    });
});