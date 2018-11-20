<?php

$products = json_decode(file_get_contents('js/src/mockup/products.json'), true);

function findProduct($slug, $products) {
  foreach ($products as $i => $product) {
    if($product['slug'] == $slug) {
      return $product;
    }
  }
  return null;
}

function findProductsByCategory($categorySlug, $products) {
  $categoryProducts = [];
  foreach ($products as $i => $product) {
    if($product['category']['slug'] == $categorySlug) {
      array_push($categoryProducts, $product);
    }
  }
  return $categoryProducts;
}

function get($param) {
  return $_GET[$param];
}

function isPresent($param) {
  return isset($_GET[$param]);
}

function abort($code) {
  include('errors/' . $code . '.php');
  die();
}
