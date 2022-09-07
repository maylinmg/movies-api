window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
  console.log(location);
  if (location.hash.startsWith("#trends")) {
    trendPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else {
    homePage();
  }
  location.hash;
}

function homePage() {
  console.log("Home !!");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.add("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.remove("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.remove("inactive");

  trendingPreviewSection.classList.remove("inactive");
  categoriesPreviewSection.classList.remove("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.add("inactive");



  getTrendingMoviesPreview();
  getCategoriesPreview();

}

function categoriesPage() {
  console.log("Category !!");

 headerSection.classList.remove("header-container--long");
 headerSection.style.background = "";
 arrowBtn.classList.remove("inactive");
 arrowBtn.classList.remove("header-arrow--white");
 headerTitle.classList.add("inactive");
 headerCategoryTitle.classList.remove("inactive");
 searchForm.classList.add("inactive");

 trendingPreviewSection.classList.add("inactive");
 categoriesPreviewSection.classList.add("inactive");
 genericSection.classList.remove("inactive");
 movieDetailSection.classList.add("inactive");
}

function movieDetailsPage() {
  console.log("Movies Details !!");
}

function searchPage() {
  console.log("Search !!");
}

function trendPage() {
  console.log("Trends !!");
}
