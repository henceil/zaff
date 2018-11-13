function showModal(call) {
	$("body").append("<div class=\'modal fade\' id=\'myModal\' tabindex=\'-1\'></div>");
    $("#myModal").append("<div class=\'modal-dialog modal-lg\' id=\'myModalDialog\'></div>");
    $("#myModalDialog").append("<div class=\'modal-content\' id=\'myModalContent\'></div>");
    $("#myModalContent").append("<div class=\'modal-header\' id=\'myModalHeader\'></div>");
    $("#myModalHeader").append("<button type=\'button\' class=\'close\' data-dismiss=\'modal\'><span>&times;</span></button>");
    $("#myModalHeader").append(" <h4 class=\'modal-title\'></h4>");
    $("#myModalContent").append("<div class=\'modal-body\' id=\'myModalBody\' style=\'height:600px;padding:0px\'></div>");
    $("#myModalContent").append("<div class=\'modal-footer\'></div>");
    $(".modal-footer").append("<button type=\'button\' class=\'btn btn-default\' data-dismiss=\'modal\'>Close</button>");

    $("#myModal").modal('show');

	$('#myModal').on('shown.bs.modal', function (e) {
	    $(".modal-body").append(" <div style=\"height: 600px;padding: 0px\" id=\"modal_echart\"></div>");
	    call("myModalBody")
	});
	$('#myModal').on('hidden.bs.modal', function (e) {
	    $("#myModal").remove()
	});
}