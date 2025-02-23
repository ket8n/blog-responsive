function setupSlideCarousel(
  carouselContainerName,
  leftBtnName,
  rightBtnName,
  scrollByPX
) {
  const trendingCardGap = 16;
  const newsVidCardGap = 32;

  const scrollContainer = document.querySelector(carouselContainerName);
  const slideLeft = document.querySelector(leftBtnName);
  const slideRight = document.querySelector(rightBtnName);

  if (!scrollContainer || !slideLeft || !slideRight) {
    return;
  }

  function updateBtnView() {
    if (scrollContainer.scrollLeft <= 0) {
      slideLeft.disabled = true;
      slideLeft.style.backgroundColor = "rgb(196 196 196 / 80%)";
    } else {
      slideLeft.disabled = false;
      slideLeft.style.backgroundColor = "";
    }

    if (
      scrollContainer.scrollLeft >=
      scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
    ) {
      slideRight.disabled = true;
      slideRight.style.backgroundColor = "rgb(196 196 196 / 80%)";
    } else {
      slideRight.disabled = false;
      slideRight.style.backgroundColor = "";
    }
  }

  slideLeft.addEventListener("click", () => {
    const trendingCardWidth =
      document.querySelector(".img-container-trending")?.offsetWidth +
      trendingCardGap;

    const newsVidCardWidth =
      document.querySelector(".img-container-news-vids")?.offsetWidth +
      newsVidCardGap;

    if (carouselContainerName.includes("trending")) {
      scrollByPX = trendingCardWidth;
    } else {
      scrollByPX = newsVidCardWidth;
    }

    scrollContainer.scrollBy({
      left: -scrollByPX,
      behavior: "smooth",
    });
    setTimeout(updateBtnView, 400);
  });

  slideRight.addEventListener("click", () => {
    const trendingCardWidth =
      document.querySelector(".img-container-trending")?.offsetWidth +
      trendingCardGap;

    const newsVidCardWidth =
      document.querySelector(".img-container-news-vids")?.offsetWidth +
      newsVidCardGap;

    if (carouselContainerName.includes("trending")) {
      scrollByPX = trendingCardWidth;
    } else {
      scrollByPX = newsVidCardWidth;
    }

    scrollContainer.scrollBy({
      left: scrollByPX,
      behavior: "smooth",
    });
    setTimeout(updateBtnView, 400);
  });

  scrollContainer.addEventListener("scroll", updateBtnView);

  updateBtnView();
}

function setupHamburger() {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const hamburgerNav = document.querySelector(".hamburger-nav");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerNav.classList.toggle("show");
  });
}

function setupNewslater() {
  const newslaterSubscribeBtn = document.querySelector(".subscribe-btn");
  const newslaterInput = document.querySelector(".newslater-input");
  const warning = document.querySelector(".warning-email");

  warning.style.display = "none";

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;
    return regex.test(email);
  }

  newslaterSubscribeBtn.disabled = true;

  newslaterInput.addEventListener("input", (e) => {
    if (e.target.value.length === 0) {
      warning.style.display = "none";
    }

    if (validateEmail(e.target.value)) {
      newslaterSubscribeBtn.disabled = false;
      warning.style.display = "none";
    } else {
      if (e.target.value.length > 0) {
        warning.style.display = "flex";
      }
      newslaterSubscribeBtn.disabled = true;
    }
  });

  newslaterSubscribeBtn.addEventListener("click", () => {
    newslaterInput.value = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupNavbarBtn() {
  const navbarHomeBtn = document.querySelector(".navbar-home");
  const navbarBlogBtn = document.querySelector(".navbar-blog");

  navbarBlogBtn.addEventListener("click", () => {
    window.open("./blog.html", "_self");
  });

  navbarHomeBtn.addEventListener("click", () => {
    window.open("./index.html", "_self");
  });
}

function setupGoToTopBtn() {
  const goToTopBtn = document.querySelector(".go-to-top");

  document.addEventListener("scroll", (e) => {
    const scrollPos = this.scrollY;

    if (scrollPos > 200) {
      goToTopBtn.classList.add("active-go-to");
    } else {
      goToTopBtn.classList.remove("active-go-to");
    }
  });

  goToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupNewsFetching() {
  const carousel = document.querySelector(".trending-cards");
  let prevCards = JSON.parse(localStorage.getItem("newsCards")) || [];

  prevCards.forEach(({ imgURL, title, author, date }) => {
    const card = document.createElement("div");
    card.classList.add("img-container");
    card.innerHTML = `
        <img src="${imgURL}" alt="img" />
        <div class="info-over-img">
          <div class="info-title cut-line">${title}</div>
          <div class="info-date font-sm">${author} - ${date}</div>
        </div>
      `;

    carousel.prepend(card);
  });
}

function setupPagination() {
  const blogNewsContainer = document.querySelector(".blog-news-section");
  const prevBtn = document.querySelector(".page-prev-btn");
  const nextBtn = document.querySelector(".page-next-btn");

  const pageBtns = [
    document.querySelector(".page-1-btn"),
    document.querySelector(".page-2-btn"),
    document.querySelector(".page-3-btn"),
    document.querySelector(".page-4-btn"),
  ];

  const itemsPerPage = 5;
  let currentPage = 1;

  function loadNewsData(page) {
    blogNewsContainer.innerHTML = `
        <div class="blog-header">
        News
        <hr class="hr-line" />
        </div>
      `;

    const firstIndex = (page - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;
    const pageData = blogData.slice(firstIndex, lastIndex);

    pageData.forEach((news) => {
      const newsElement = document.createElement("div");
      newsElement.classList.add("blog-news-row");

      newsElement.innerHTML = `
        <div class="blog-news-img">
        <img src="${news.image}" alt="img" />
        </div>
        <div class="blog-news-content">
        <div class="blog-title">${news.title}</div>
        <div class="blog-author">${news.author} - ${news.date}</div>
        <summary class="blog-body">${news.body}</summary>
        </div>
        `;

      blogNewsContainer.appendChild(newsElement);
    });

    updateBtns();
    document
      .getElementById("blog-news-section")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateBtns() {
    if (currentPage === 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    if (currentPage === Math.ceil(blogData.length / itemsPerPage)) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    pageBtns.forEach((btn, index) => {
      btn.classList.toggle("active-page", index + 1 === currentPage);
    });
  }

  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      loadNewsData(currentPage);
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentPage < Math.ceil(blogData.length / itemsPerPage)) {
      currentPage++;
      loadNewsData(currentPage);
    }
  });

  pageBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      currentPage = index + 1;
      loadNewsData(currentPage);
    });
  });

  loadNewsData(currentPage);
}

function Initialize() {
  setupSlideCarousel(
    ".trending-cards",
    ".carousel-left-trending",
    ".carousel-right-trending",
    400
  );

  setupSlideCarousel(
    ".news-cards",
    ".carousel-left-news",
    ".carousel-right-news",
    400
  );

  setupSlideCarousel(
    ".vid-cards",
    ".carousel-left-vid-news",
    ".carousel-right-vid-news",
    400
  );

  setupHamburger();
  setupNewslater();
  setupNavbarBtn();
  setupGoToTopBtn();
  setupNewsFetching();
  setupPagination();
}

document.addEventListener("DOMContentLoaded", function () {
  Initialize();
});
