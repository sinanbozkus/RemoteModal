var RemoteModal = function (url, options) {

    if (!$('#remoteModal').length) {
        $("body").append('<div id="remoteModal" class="modal" tabindex="-1" role="dialog"></div>');
    }

    $('body #remoteModal').html("");
    $('body #remoteModal').data('bs.modal', null);

    $('body #remoteModal').load(url, function () {

        if (options === undefined) {
            $("#remoteModal").modal({ show: true });
        } else {
            $("#remoteModal").modal(options);
        }

    });
};

var DisposeRemoteModal = function () {
    $('body #remoteModal').modal('hide').modal('dispose');
};
