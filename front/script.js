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
            });
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


// Here is my interactive button,
// It will show the countries the user is looking for:
$("#btnShowData").click(function () {
    const list = $("#countries-list");
        if (list.is(":visible")) {
			list.hide();
		} else {
			list.show();
		};
});