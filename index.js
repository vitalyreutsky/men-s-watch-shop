function render() {
  const productsStore = localStorageUtill.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch("server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    setTimeout(() => {
      render();
      spinnerPage.handleClear();
    }, 2000);
  })
  .catch((error) => {
    console.log(error);
  });
