fetch("https://toakybbeekybfigezlly.supabase.co/rest/v1/sakura_cards", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvYWt5YmJlZWt5YmZpZ2V6bGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NTUwOTYsImV4cCI6MTk5NDUzMTA5Nn0.wD3fDP1_HxiJ8_NslNAWXNYg0OhGtytUve_lcQP9tgI",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(cards) {
  //   cards.forEach();
  console.log(cards);
}
