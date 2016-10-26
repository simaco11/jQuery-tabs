	//Vezba paneli


	$('.panel-div .panel-tabs li').click(function(){		
		$('.panel-div .panel-tabs li.active').removeClass('active');
		$(this).addClass('active');

		//Find Panel to show
		var panelToShow = $(this).attr('data-panelName');

		//panel to hide
		$('.panel-div .panel.active').hide(0 , showNext);	

		//Show Next panel
		function showNext(){
			$(this).removeClass('active');

			$('#' + panelToShow).show(0, function(){
				$(this).addClass('active');
			});
			

		}
	});

