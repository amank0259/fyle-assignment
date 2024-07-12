// PopUp Form
const openModalButtons = $("[data-modal-target]");
const closeModalButtons = $("[data-close-button]");
const overlay = $("#overlay");

openModalButtons.each(function () {
    $(this).on("click", function () {
        const modal = $($(this).data("modal-target"));
        openModal(modal);
    });
});

overlay.on("click", function () {
    const modals = $(".modal.active");
    modals.each(function () {
        closeModal($(this));
    });
});

closeModalButtons.each(function () {
    $(this).on("click", function () {
        const modal = $(this).closest(".modal");
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.addClass("active");
    overlay.addClass("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.removeClass("active");
    overlay.removeClass("active");
}

// Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // }
});

// Toggle Image(Project Section)
let tabs = $(".tab");
let images = $(".img");

tabs.each(function (index) {
    $(this).on("click", function () {
        images.each(function () {
            $(this).removeClass("active");
        });
        tabs.each(function () {
            $(this).removeClass("active");
        });
        images.eq(index).addClass("active");
        tabs.eq(index).addClass("active");
    });
});
