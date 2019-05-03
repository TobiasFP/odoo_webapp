fetch('/odoo_webapp/static/src/manifest.json')
.then(function(response) {
    console.log("And the manifest got fetched.");
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});
