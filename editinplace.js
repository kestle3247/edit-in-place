$(document).ready(function() {

	$("div.editme").click(function() {

		if ($(this).children('input').length == 0) {

			var inputbox = "<input type='text' class='inputbox' value=\""+$(this).text()+"\">"
			$(this).html(inputbox)
			$("input.inputbox").focus()
			$("input.inputbox").blur(function() {
				var value = $(this).val()
				$(".editme").text(value)
			})
		}
	})
})
