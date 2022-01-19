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

$("#btnShowData").click(function () {
    getAllCountries();
});