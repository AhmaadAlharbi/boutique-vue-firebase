
<template>
  <div class="container">
    <!-- HERO SECTION-->
    <section
      class="hero pb-3 bg-cover bg-center d-flex align-items-center"
      style="background: url(src/assets/img/hero-banner-alt.jpg)"
    >
      <div class="container py-5">
        <div class="row px-4 px-lg-5">
          <div class="col-lg-6">
            <p class="text-muted small text-uppercase mb-2">
              New Inspiration 2020
            </p>
            <h1 class="h2 text-uppercase mb-3">20% off on new season</h1>
            <a class="btn btn-dark" href="shop.html">Browse collections</a>
          </div>
        </div>
      </div>
    </section>
    <!-- CATEGORIES SECTION-->
    <section class="pt-5">
      <header class="text-center">
        <p class="small text-muted small text-uppercase mb-1">
          Carefully created collections
        </p>
        <h2 class="h5 text-uppercase mb-4">Browse our categories</h2>
      </header>
      <div class="row">
        <p v-if="error">{{ error }}</p>
        <!-- <div v-if="documents">
          <ul>
            {{
              documents[3]
            }}
          </ul>
        </div> -->
        <div class="col-md-4">
          <a class="category-item" href="shop.html"
            ><img
              class="img-fluid"
              :src="categories[1].coverUrl"
              alt=""
            /><strong class="category-item-title">{{
              categories[1].name
            }}</strong></a
          >
        </div>
        <div class="col-md-4">
          <a class="category-item mb-4" href="shop.html"
            ><img
              class="img-fluid"
              :src="categories[3].coverUrl"
              alt=""
            /><strong class="category-item-title">{{
              categories[3].name
            }}</strong></a
          ><a class="category-item" href="shop.html"
            ><img
              class="img-fluid"
              :src="categories[2].coverUrl"
              alt=""
            /><strong class="category-item-title">{{
              categories[2].name
            }}</strong></a
          >
        </div>
        <div class="col-md-4">
          <a class="category-item" href="shop.html"
            ><img
              class="img-fluid"
              :src="categories[0].coverUrl"
              alt=""
            /><strong class="category-item-title">{{
              categories[0].name
            }}</strong></a
          >
        </div>
      </div>
    </section>
    <!-- TRENDING PRODUCTS-->
    <section class="py-5">
      <header>
        <p class="small text-muted small text-uppercase mb-1">
          Made the hard way
        </p>
        <h2 class="h5 text-uppercase mb-4">Top trending products</h2>
      </header>
      <div class="row">
        <!-- PRODUCT-->
        <div
          class="col-xl-3 col-lg-4 col-sm-6"
          v-for="(product, index) in products.slice(0, 8)"
          :key="index"
        >
          <div class="product text-center">
            <div class="position-relative mb-3">
              <div class="badge text-white bg-"></div>
              <a class="d-block" href="detail.html"
                ><img class="img-fluid w-100" :src="product.coverUrl" alt="..."
              /></a>
              <div class="product-overlay">
                <ul class="mb-0 list-inline">
                  <li class="list-inline-item m-0 p-0">
                    <a class="btn btn-sm btn-outline-dark" href="#!"
                      ><i class="far fa-heart"></i
                    ></a>
                  </li>
                  <li class="list-inline-item m-0 p-0">
                    <a class="btn btn-sm btn-dark" href="cart.html"
                      >Add to cart</a
                    >
                  </li>
                  <li class="list-inline-item me-0">
                    <a
                      class="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                      ><i class="fas fa-expand"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a class="reset-anchor" href="detail.html">{{ product.name }}</a>
            </h6>
            <p class="small text-muted">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- SERVICES-->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row text-center gy-3">
          <div class="col-lg-4">
            <div class="d-inline-block">
              <div class="d-flex align-items-end">
                <svg class="svg-icon svg-icon-big svg-icon-light">
                  <use xlink:href="#delivery-time-1"></use>
                </svg>
                <div class="text-start ms-3">
                  <h6 class="text-uppercase mb-1">Free shipping</h6>
                  <p class="text-sm mb-0 text-muted">Free shipping worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-inline-block">
              <div class="d-flex align-items-end">
                <svg class="svg-icon svg-icon-big svg-icon-light">
                  <use xlink:href="#helpline-24h-1"></use>
                </svg>
                <div class="text-start ms-3">
                  <h6 class="text-uppercase mb-1">24 x 7 service</h6>
                  <p class="text-sm mb-0 text-muted">Free shipping worldwide</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="d-inline-block">
              <div class="d-flex align-items-end">
                <svg class="svg-icon svg-icon-big svg-icon-light">
                  <use xlink:href="#label-tag-1"></use>
                </svg>
                <div class="text-start ms-3">
                  <h6 class="text-uppercase mb-1">Festivaloffers</h6>
                  <p class="text-sm mb-0 text-muted">Free shipping worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- NEWSLETTER-->
    <section class="py-5">
      <div class="container p-0">
        <div class="row gy-3">
          <div class="col-lg-6">
            <h5 class="text-uppercase">Let's be friends!</h5>
            <p class="text-sm text-muted mb-0">
              Nisi nisi tempor consequat laboris nisi.
            </p>
          </div>
          <div class="col-lg-6">
            <form action="#">
              <div class="input-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon2"
                />
                <button class="btn btn-dark" id="button-addon2" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer class="bg-dark text-white">
    <div class="container py-4">
      <div class="row py-5">
        <div class="col-md-4 mb-3 mb-md-0">
          <h6 class="text-uppercase mb-3">Customer services</h6>
          <ul class="list-unstyled mb-0">
            <li><a class="footer-link" href="#!">Help &amp; Contact Us</a></li>
            <li><a class="footer-link" href="#!">Returns &amp; Refunds</a></li>
            <li><a class="footer-link" href="#!">Online Stores</a></li>
            <li><a class="footer-link" href="#!">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div class="col-md-4 mb-3 mb-md-0">
          <h6 class="text-uppercase mb-3">Company</h6>
          <ul class="list-unstyled mb-0">
            <li><a class="footer-link" href="#!">What We Do</a></li>
            <li><a class="footer-link" href="#!">Available Services</a></li>
            <li><a class="footer-link" href="#!">Latest Posts</a></li>
            <li><a class="footer-link" href="#!">FAQs</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="text-uppercase mb-3">Social media</h6>
          <ul class="list-unstyled mb-0">
            <li><a class="footer-link" href="#!">Twitter</a></li>
            <li><a class="footer-link" href="#!">Instagram</a></li>
            <li><a class="footer-link" href="#!">Tumblr</a></li>
            <li><a class="footer-link" href="#!">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div class="border-top pt-4" style="border-color: #1d1d1d !important">
        <div class="row">
          <div class="col-md-6 text-center text-md-start">
            <p class="small text-muted mb-0">
              &copy; 2021 All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <p class="small text-muted mb-0">
              Template designed by
              <a
                class="text-white reset-anchor"
                href="https://bootstrapious.com/p/boutique-bootstrap-e-commerce-template"
                >Bootstrapious</a
              >
            </p>
            <!-- If you want to remove the backlink, please purchase the Attribution-Free License. See details in readme.txt or license.txt. Thanks!-->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import getCollection from "../composables/getCollection";

export default {
  setup() {
    const { error, documents: categories } = getCollection("categories");
    const { documents: products } = getCollection("products");
    return { error, categories, products };
  },
};
</script>
