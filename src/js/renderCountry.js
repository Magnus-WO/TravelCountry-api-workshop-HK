const renderCountry = (country) => {
  const countryCard = document.querySelector("#country-card");
  const countryList = document.querySelector(".country-card__list");
  const countryCardContainer = document.querySelector(
    ".country-card-container "
  );
  const countryBackgroundImage = document.querySelector(".country-card__image");

  //Flag
  const flagContainer = document.createElement("div");
  const countryFlag = document.createElement("img");
  const countryContainerImage = document.querySelector(".country-card__image");

  countryList.innerHTML = "";
  countryBackgroundImage.style.display = "none";
  countryCardContainer.style.height = "fit-content";
  countryCard.classList.add("country-card--style");

  const createListItem = (title, content) => {
    const item = document.createElement("li");
    const itemTitle = document.createElement("h3");
    const itemContent = document.createElement("p");

    item.append(itemTitle, itemContent);

    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.classList.add("country-card__list-item");
    itemTitle.classList.add("country-card__list-title");
    return item;
  };
  const countryName = createListItem("CountryName:", country.name.common);
  const countryContinent = createListItem("Continent:", country.continents[0]);
  const countryCapital = createListItem("Continent:", country.capital[0]);
  const countryPopulation = createListItem("Continent:", country.population);

  const extractedLanguages = Object.values(country.languages).toString();
  const countryLanguage = createListItem("Languages:", extractedLanguages);

  const currencyToArray = Object.entries(country.currencies);
  const countryCurrency = createListItem("Currency:", currencyToArray[0][0]);
  const countryTimeZone = createListItem("Time zone:", country.timezones[0]);

  const capitalizedWeekDay =
    country.startOfWeek.slice(0, 1).toUpperCase() +
    country.startOfWeek.slice(1);

  const countryWeekday = createListItem(
    "Start of the week:",
    capitalizedWeekDay
  );
  const countryDrivingSide = createListItem(
    `Driving side: ${country.car.side}`
  );
  countryFlag.src = country.flags.png;

  //   Appending elements
  countryList.append(
    flagContainer,
    countryName,
    countryCapital,
    countryContinent,
    countryPopulation,
    countryLanguage,
    countryCurrency,
    countryTimeZone,
    countryWeekday,
    countryDrivingSide
  );
  flagContainer.append(countryFlag);

  countryFlag.classList.add("country-card__flag-container");
};

export default renderCountry;
