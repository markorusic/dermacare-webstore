<?php

$products = json_decode(file_get_contents('api/products.json'), true);
$categories = json_decode(file_get_contents('api/categories.json'), true);

function findBySlug($slug, $items) {
  foreach ($items as $i => $item) {
    if($item['slug'] == $slug) {
      return $item;
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
