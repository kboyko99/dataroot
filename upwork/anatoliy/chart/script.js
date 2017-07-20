
$.ajax({
    url: "base.php",
    success: function(data) { alert(JSON.parse(data)); }
});
