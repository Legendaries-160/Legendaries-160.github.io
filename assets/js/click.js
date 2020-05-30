 
$(document).ready(function()
{
     $("#ss1").click(function()
     {
          $("#s2").removeClass("active").addClass("noactive");
      	$("#s3").removeClass("active").addClass("noactive");
	$("#s4").removeClass("active").addClass("noactive");
	$("#s5").removeClass("active").addClass("noactive");
	$("#s1").removeClass("noactive").addClass("active");


	});

	$("#ss2").click(function()
	{
		 $("#s1").removeClass("active").addClass("noactive");
		 $("#s3").removeClass("active").addClass("noactive");
   $("#s4").removeClass("active").addClass("noactive");
   $("#s5").removeClass("active").addClass("noactive");
   $("#s2").removeClass("noactive").addClass("active");


   });
   $("#ss6").click(function()
	{
		 $("#s1").removeClass("active").addClass("noactive");
		 $("#s3").removeClass("active").addClass("noactive");
   $("#s4").removeClass("active").addClass("noactive");
   $("#s5").removeClass("active").addClass("noactive");
   $("#s2").removeClass("noactive").addClass("active");


   });

	$("#ss3").click(function()
     {
          $("#s2").removeClass("active").addClass("noactive");
      	$("#s1").removeClass("active").addClass("noactive");
	$("#s4").removeClass("active").addClass("noactive");
	$("#s5").removeClass("active").addClass("noactive");
	$("#s3").removeClass("noactive").addClass("active");


	});

	$("#ss4").click(function()
     {
          $("#s2").removeClass("active").addClass("noactive");
      	$("#s3").removeClass("active").addClass("noactive");
	$("#s1").removeClass("active").addClass("noactive");
	$("#s5").removeClass("active").addClass("noactive");
	$("#s4").removeClass("noactive").addClass("active");

	$("#ss5").click(function()
     {
          $("#s2").removeClass("active").addClass("noactive");
      	$("#s3").removeClass("active").addClass("noactive");
	$("#s4").removeClass("active").addClass("noactive");
	$("#s1").removeClass("active").addClass("noactive");
	$("#s5").removeClass("noactive").addClass("active");


	});

	});


	
});
