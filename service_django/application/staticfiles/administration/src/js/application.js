/* Instructions to excecute when end the load. */
$(document).ready(function () {
    /* Identifier */
    let $identifierTitle = $("title");
    let $identifierDivLoad = $("#div-load");
    let $identifierDivHeader = $("#div-header");
    let $identifierDivLeftside = $("#div-leftside");
    let $identifierDivCenter = $("#div-center");
    let $identifierDivCenterDivContent = $identifierDivCenter.find("#div-content");
    let $identifierDivCenterDivContentHeader = null;
    let $identifierDivCenterDivContentSearch = null;
    let $identifierDivCenterDivContentSearchForm = null;
    let $identifierDivCenterDivContentSearchFormInput = null;
    let $identifierDivCenterDivContentTable = null;
    let $identifierDivCenterDivContentTableTbody = null;
    let $identifierDivCenterDivContentPagination = null;
    let $identifierDivCenterDivFooter = $identifierDivCenter.find("#div-footer");
    let $identifierDivModal = $("#div-modal");
    let $identifierDivModalModal = $("#div-modal-modal");
    /* Events */
    $identifierDivHeader.off("click", ".link-application-reload");
    $identifierDivHeader.on("click", ".link-application-reload", function () {
        let $link = $(this);
        window.location = $link.attr("data-url");
    });
    $identifierDivHeader.off("click", ".link-div-modal-reload");
    $identifierDivHeader.on("click", ".link-div-modal-reload", HTMLDivModalRELOAD);
    $identifierDivHeader.off("click", ".link-div-modal-action-locale");
    $identifierDivHeader.on("click", ".link-div-modal-action-locale", HTMLDivModalACTIONLOCALE);
    $identifierDivLeftside.off("click", ".link-div-center-div-content-reload");
    $identifierDivLeftside.on("click", ".link-div-center-div-content-reload", HTMLDivCenterDivContentRELOAD);
    $identifierDivCenterDivContent.off("click", ".link-div-modal-reload");
    $identifierDivCenterDivContent.on("click", ".link-div-modal-reload", HTMLDivModalRELOAD);
    $identifierDivModal.off("click", ".link-div-modal-reload");
    $identifierDivModal.on("click", ".link-div-modal-reload", HTMLDivModalRELOAD);
    $identifierDivModal.off("submit", ".link-div-modal-action-login");
    $identifierDivModal.on("submit", ".link-div-modal-action-login", HTMLDivModalACTIONLOGIN);
    $identifierDivModal.off("submit", ".link-div-modal-action-logout");
    $identifierDivModal.on("submit", ".link-div-modal-action-logout", HTMLDivModalACTIONLOGOUT);
    $identifierDivModal.off("submit", ".link-div-modal-action-profile");
    $identifierDivModal.on("submit", ".link-div-modal-action-profile", HTMLDivModalACTIONPROFILE);
    $identifierDivModal.off("click", "#button-submit-create");
    $identifierDivModal.on("click", "#button-submit-create", function () {
        $identifierDivModal.find("#button-submit-create").removeClass("active");
        $identifierDivModal.find("#button-submit-create-and-update").removeClass("active");
        $(this).addClass("active");
    });
    $identifierDivModal.off("click", "#button-submit-create-and-update");
    $identifierDivModal.on("click", "#button-submit-create-and-update", function () {
        $identifierDivModal.find("#button-submit-create").removeClass("active");
        $identifierDivModal.find("#button-submit-create-and-update").removeClass("active");
        $(this).addClass("active");
    });
    $identifierDivModal.off("submit", ".link-div-modal-action-create");
    $identifierDivModal.on("submit", ".link-div-modal-action-create", HTMLDivModalACTIONCREATE);
    $identifierDivModal.off("submit", ".link-div-modal-action-create-from-administration-documentation-document");
    $identifierDivModal.on("submit", ".link-div-modal-action-create-from-administration-documentation-document", HTMLDivModalACTIONCREATEFromAdministrationDocumentationDocument);
    $identifierDivModal.off("submit", ".link-div-modal-action-update");
    $identifierDivModal.on("submit", ".link-div-modal-action-update", HTMLDivModalACTIONUPDATE);
    $identifierDivModal.off("submit", ".link-div-modal-action-update-from-administration-documentation-document");
    $identifierDivModal.on("submit", ".link-div-modal-action-update-from-administration-documentation-document", HTMLDivModalACTIONUPDATEFromAdministrationDocumentationDocument);
    $identifierDivModal.off("submit", ".link-div-modal-action-delete");
    $identifierDivModal.on("submit", ".link-div-modal-action-delete", HTMLDivModalACTIONDELETE);
    $identifierDivModal.off("submit", ".link-div-modal-action-approve");
    $identifierDivModal.on("submit", ".link-div-modal-action-approve", HTMLDivModalACTIONAPPROVE);
    $identifierDivModal.off("submit", ".link-div-modal-action-disapprove");
    $identifierDivModal.on("submit", ".link-div-modal-action-disapprove", HTMLDivModalACTIONDISAPPROVE);
    $identifierDivModal.off("click", ".link-div-modal-action-refresh");
    $identifierDivModal.on("click", ".link-div-modal-action-refresh", HTMLDivModalACTIONREFRESH);
    $identifierDivModal.off("click", ".link-div-modal-action-refresh-from-security-login");
    $identifierDivModal.on("click", ".link-div-modal-action-refresh-from-security-login", HTMLDivModalACTIONREFRESHFromSecurityLogin);
    $identifierDivModal.off("click", ".link-div-modal-action-refresh-from-administration-documentation-document-create");
    $identifierDivModal.on("click", ".link-div-modal-action-refresh-from-administration-documentation-document-create", HTMLDivModalACTIONREFRESHFromAdministrationDocumentationDocument);
    $identifierDivModal.off("click", ".link-div-modal-action-refresh-from-administration-documentation-document-update");
    $identifierDivModal.on("click", ".link-div-modal-action-refresh-from-administration-documentation-document-update", HTMLDivModalACTIONREFRESHFromAdministrationDocumentationDocument);
    $identifierDivModal.off("click", ".link-div-modal-action-close");
    $identifierDivModal.on("click", ".link-div-modal-action-close", HTMLDivModalACTIONCLOSE);
    $identifierDivModal.off("click", ".link-div-modal-modal-reload");
    $identifierDivModal.on("click", ".link-div-modal-modal-reload", HTMLDivModalModalRELOAD);
    $identifierDivModalModal.off("submit", ".link-div-modal-modal-action-submit-keep-div-modal");
    $identifierDivModalModal.on("submit", ".link-div-modal-modal-action-submit-keep-div-modal", HTMLDivModalModalACTIONSUBMITKeepDivModal);
    $identifierDivModalModal.off("submit", ".link-div-modal-modal-action-submit-close-div-modal");
    $identifierDivModalModal.on("submit", ".link-div-modal-modal-action-submit-close-div-modal", HTMLDivModalModalACTIONSUBMITCloseDivModal);
    $identifierDivModalModal.off("click", ".link-div-modal-modal-action-refresh");
    $identifierDivModalModal.on("click", ".link-div-modal-modal-action-refresh", HTMLDivModalModalACTIONREFRESH);
    $identifierDivModalModal.off("click", ".link-div-modal-modal-action-close");
    $identifierDivModalModal.on("click", ".link-div-modal-modal-action-close", HTMLDivModalModalACTIONCLOSE);

    function HTMLApplicationRELOAD() {
        $.ajax({
            url: $identifierDivLoad.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                $identifierDivLoad.html("");
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivLoad.html(data.HTML_DIV_LOAD);
                    /* */
                    $identifierTitle.html(TEXT_LOADING);
                    $identifierDivHeader.html(HTML_LOADING);
                    $identifierDivLeftside.html(HTML_LOADING);
                    $identifierDivCenterDivContent.html(HTML_LOADING);
                    $identifierDivCenterDivFooter.html(HTML_LOADING);
                    /* */
                    HTMLTitleRELOAD();
                }
            }
        });
    }

    function HTMLTitleRELOAD() {
        $.ajax({
            url: $identifierTitle.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierTitle.html(data.HTML_TITLE);
                    /* */
                    HTMLDivHeaderRELOAD();
                }
            }
        });
    }

    function HTMLDivHeaderRELOAD() {
        $.ajax({
            url: $identifierDivHeader.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivHeader.html(data.HTML_DIV_HEADER);
                    /* */
                    HTMLDivLeftsideRELOAD();
                }
            }
        });
    }

    function HTMLDivLeftsideRELOAD() {
        $.ajax({
            url: $identifierDivLeftside.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivLeftside.html(data.HTML_DIV_LEFTSIDE);
                    /* */
                    if ($identifierDivLeftside.find(".link-div-center-div-content-reload").hasClass("active")) {
                        let $identifierLinkActive = $identifierDivLeftside.find(".link-div-center-div-content-reload.active");
                        let $identifierParent1 = $identifierLinkActive.parent().parent();
                        let $identifierParent2 = $identifierParent1;
                        let $identifierParent3 = $identifierParent1;
                        let $identifierParent4 = $identifierParent1;
                        let $identifierParent5 = $identifierParent1;
                        let level = 0;
                        if ($identifierParent1.hasClass("level-1")) {
                            level = 1;
                        }
                        if ($identifierParent1.hasClass("level-2")) {
                            level = 2;
                        }
                        if ($identifierParent1.hasClass("level-3")) {
                            level = 3;
                        }
                        if ($identifierParent1.hasClass("level-4")) {
                            level = 4;
                        }
                        if ($identifierParent1.hasClass("level-5")) {
                            level = 5;
                        }
                        if (level === 1 || level === 2 || level === 3 || level === 4 || level === 5) {
                            $identifierParent1.addClass("show");
                            $identifierParent1.siblings("a.nav-link[data-toggle='collapse']").attr("aria-expanded", "true");
                        }
                        if (level === 2 || level === 3 || level === 4 || level === 5) {
                            $identifierParent2 = $identifierParent1.parent().parent();
                            $identifierParent2.addClass("show");
                            $identifierParent2.siblings("a.nav-link[data-toggle='collapse']").attr("aria-expanded", "true");
                        }
                        if (level === 3 || level === 4 || level === 5) {
                            $identifierParent3 = $identifierParent2.parent().parent();
                            $identifierParent3.addClass("show");
                            $identifierParent3.siblings("a.nav-link[data-toggle='collapse']").attr("aria-expanded", "true");
                        }
                        if (level === 4 || level === 5) {
                            $identifierParent4 = $identifierParent3.parent().parent();
                            $identifierParent4.addClass("show");
                            $identifierParent4.siblings("a.nav-link[data-toggle='collapse']").attr("aria-expanded", "true");
                        }
                        if (level === 5) {
                            $identifierParent5 = $identifierParent4.parent().parent();
                            $identifierParent5.addClass("show");
                            $identifierParent5.siblings("a.nav-link[data-toggle='collapse']").attr("aria-expanded", "true");
                        }
                        $identifierLinkActive.trigger("click");
                    }
                    else {
                        HTMLDivCenterDivContentDefaultRELOAD();
                    }
                    HTMLDivCenterDivFooterRELOAD();
                }
            }
        });
    }

    function HTMLDivLeftsideNoShow() {
        window.setTimeout(
            function () {
                $identifierDivHeader.find("#div-header-brand-toggler").find("button.toggler.btn[data-toggle='collapse']").attr("aria-expanded", "false");
                $identifierDivLeftside.removeClass("collapse show");
            }, 500);
    }

    function HTMLDivCenterDivContentDefaultRELOAD() {
        $.ajax({
            url: $identifierDivCenterDivContent.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivCenterDivContent.html(data.HTML_DIV_CENTER_DIV_CONTENT);
                }
            }
        });
    }

    function HTMLDivCenterDivContentRELOAD() {
        let $this = $(this);
        $identifierDivLeftside.find(".link-div-center-div-content-reload.active").removeClass("active");
        $this.addClass("active");
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                if ($identifierDivCenterDivContent != null) {
                    let $identifier = $identifierDivCenterDivContent;
                    let intIdentifierHeight = $identifier.height();
                    $identifier.html(HTML_LOADING);
                    let $identifierHtmlLoading = $identifier.find(".loading");
                    let intHtmlLoadingHeight = $identifierHtmlLoading.height();
                    intHtmlLoadingHeight = (intIdentifierHeight > intHtmlLoadingHeight) ? intIdentifierHeight : intHtmlLoadingHeight;
                    $identifierHtmlLoading.height(intHtmlLoadingHeight);
                }
                HTMLDivLeftsideNoShow();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivCenterDivContent.html(data.HTML_DIV_CENTER_DIV_CONTENT);
                    /* */
                    $identifierDivCenterDivContentHeader = $identifierDivCenterDivContent.find("#div-content-header");
                    $identifierDivCenterDivContentSearch = $identifierDivCenterDivContent.find("#div-content-search");
                    $identifierDivCenterDivContentSearchForm = $identifierDivCenterDivContentSearch.find("form");
                    $identifierDivCenterDivContentSearchFormInput = $identifierDivCenterDivContentSearchForm.find("input#search");
                    $identifierDivCenterDivContentTable = $identifierDivCenterDivContent.find("#div-content-table");
                    $identifierDivCenterDivContentTableTbody = $identifierDivCenterDivContentTable.find("tbody");
                    $identifierDivCenterDivContentPagination = $identifierDivCenterDivContent.find("#div-content-pagination");
                    /* */
                    $identifierDivCenterDivContentHeader.off("click", ".link-div-center-div-content-table-tbody-and-pagination-action-refresh");
                    $identifierDivCenterDivContentHeader.on("click", ".link-div-center-div-content-table-tbody-and-pagination-action-refresh", HTMLDivCenterDivContentTableTbodyAndPaginationACTIONREFRESH);
                    $identifierDivCenterDivContentSearch.off("submit", ".link-div-center-div-content-table-tbody-and-pagination-action-search");
                    $identifierDivCenterDivContentSearch.on("submit", ".link-div-center-div-content-table-tbody-and-pagination-action-search", HTMLDivCenterDivContentTableTbodyAndPaginationACTIONSEARCH);
                    $identifierDivCenterDivContentPagination.off("click", ".link-div-center-div-content-table-tbody-and-pagination-action-pagination");
                    $identifierDivCenterDivContentPagination.on("click", ".link-div-center-div-content-table-tbody-and-pagination-action-pagination", HTMLDivCenterDivContentTableTbodyAndPaginationACTIONPAGINATION);
                    /* */
                    $identifierDivCenterDivContentHeader.find(".link-div-center-div-content-table-tbody-and-pagination-action-refresh").trigger("click");
                }
            }
        });
    }

    function HTMLDivCenterDivContentTableTbodyAndPaginationACTIONREFRESH(event) {
        event.preventDefault();
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                HTMLDivCenterDivContentPaginationINVISIBLE();
                HTMLDivCenterDivContentTableTbodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivCenterDivContentSearchFormInput.val("");
                    $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                    $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                    HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                }
            }
        });
    }

    function HTMLDivCenterDivContentTableTbodyAndPaginationACTIONSEARCH(event) {
        event.preventDefault();
        let $this = $(this);
        $.ajax({
            url: $this.attr("action"),
            data: {
                "search": $.trim($identifierDivCenterDivContentSearchFormInput.val()),
                "page": 1
            },
            type: $this.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivCenterDivContentPaginationINVISIBLE();
                HTMLDivCenterDivContentTableTbodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                    $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                    HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                }
            }
        });
    }

    function HTMLDivCenterDivContentTableTbodyAndPaginationACTIONPAGINATION(event) {
        event.preventDefault();
        let $this = $(this);
        if (!$this.hasClass("off-click")) {
            $identifierDivCenterDivContentPagination.find(".link-div-center-div-content-table-tbody-and-pagination-action-pagination").parent().removeClass("active");
            $this.parent().addClass("active");
            $.ajax({
                url: $this.attr("data-url"),
                type: "get",
                dataType: "json",
                beforeSend: function () {
                    HTMLDivCenterDivContentPaginationOFFCLICK();
                    HTMLDivCenterDivContentTableTbodySHOWLOAD();
                },
                success: function (data) {
                    if (data.BOOLEAN_ERROR) {
                        HTMLDivModalSHOWMESSAGEERROR(data);
                    }
                    else {
                        $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                        $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                        HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                    }
                }
            });
        }
    }

    function HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD() {
        let $table = $identifierDivCenterDivContentTable.find("table.table");
        $table.jquerydragdropcollapsibletreetable({
            enableMove: true,
            onMoveEnd: function (item) {
                let intPk = $(item).jquerydragdropcollapsibletreetable("getId");
                let intParent = $(item).jquerydragdropcollapsibletreetable("getParentId");
                if (intParent == null) {
                    intParent = 0;
                }
                let intPosition = 0;
                // index: El numero de ocurrencia del elemento, es decir, durante el recorrido de elementos el numero de elemento encontrado.
                // element: Elemento actual dentro del recuento/recorrido. Se puede usar "this".
                $table.find("tbody").find("tr").each(function (index, element) {
                    intPosition += 1;
                    if (intPk === $(element).jquerydragdropcollapsibletreetable("getId")) {
                        return false; //break the loop
                    }
                });
                $.ajax({
                    url: $table.attr("data-url"),
                    data: {
                        "pk": intPk,
                        "parent": intParent,
                        "position": intPosition
                    },
                    type: "get",
                    dataType: "json",
                    beforeSend: function () {
                        HTMLDivModalSHOWLOAD();
                    },
                    success: function (data) {
                        if (data.BOOLEAN_ERROR) {
                            HTMLDivModalSHOWMESSAGEERROR(data);
                        }
                        else {
                            if (data.LOCALE_IS_ACTIVE) {
                                let branch = $(item).jquerydragdropcollapsibletreetable("getBranch");
                                for (let x = 0; x < branch.length; x++) {
                                    $(branch[x]).find("td").last().text(data.LOCALE_IS_ACTIVE["option_no"]);
                                }
                            }
                            HTMLDivModalSHOWMESSAGEOK(data);
                        }
                    }
                });
            }
        });
    }

    function HTMLDivCenterDivContentTableTbodySHOWLOAD() {
        if ($identifierDivCenterDivContentTableTbody != null) {
            let htmlLoading = "<tr><th scope='row' colspan='100'>" + HTML_LOADING + "</th></tr>";
            let intTableTbodyHeight = $identifierDivCenterDivContentTableTbody.height();
            $identifierDivCenterDivContentTableTbody.html(htmlLoading);
            let $identifierHtmlLoading = $identifierDivCenterDivContentTableTbody.find(".loading");
            let intHtmlLoadingHeight = $identifierHtmlLoading.height();
            intHtmlLoadingHeight = (intTableTbodyHeight > intHtmlLoadingHeight) ? intTableTbodyHeight : intHtmlLoadingHeight;
            $identifierHtmlLoading.height(intHtmlLoadingHeight);
        }
    }

    function HTMLDivCenterDivContentPaginationINVISIBLE() {
        if ($identifierDivCenterDivContentPagination != null) {
            $identifierDivCenterDivContentPagination.find("*").addClass("invisible");
        }
    }

    function HTMLDivCenterDivContentPaginationOFFCLICK() {
        if ($identifierDivCenterDivContentPagination != null) {
            $identifierDivCenterDivContentPagination.find(".page-link").addClass("off-click");
        }
    }

    function HTMLDivCenterDivFooterRELOAD() {
        $.ajax({
            url: $identifierDivCenterDivFooter.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivCenterDivFooter.html(data.HTML_DIV_CENTER_DIV_FOOTER);
                }
            }
        });
    }

    function HTMLDivModalRELOAD() {
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalSHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivModal.html(data.HTML_DIV_MODAL);
                    $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                }
            }
        });
    }

    function HTMLDivModalSHOWLOAD() {
        $identifierDivModal.html("<div class='modal-dialog modal-sm'><div class='modal-content'>" + HTML_LOADING + "</div></div>");
        $identifierDivModal.modal("show");
    }

    function HTMLDivModalModalContentModalBodySHOWLOAD() {
        let $identifier = $identifierDivModal.find(".modal-content").find(".modal-body");
        let intIdentifierHeight = $identifier.height();
        $identifier.html(HTML_LOADING);
        let $identifierHtmlLoading = $identifier.find(".loading");
        let intHtmlLoadingHeight = $identifierHtmlLoading.height();
        intHtmlLoadingHeight = (intIdentifierHeight > intHtmlLoadingHeight) ? intIdentifierHeight : intHtmlLoadingHeight;
        $identifierHtmlLoading.height(intHtmlLoadingHeight);
        /* */
        $identifierDivModal.find(".btn").not(".link-div-modal-action-close").attr("disabled", "disabled");
        $identifierDivModal.find(".btn").not(".link-div-modal-action-close").addClass("disabled");
    }

    function HTMLDivModalModalContentModalBodySHOWLOADFromSecurityLogin() {
        let $identifier = $identifierDivModal.find(".modal-content").find(".modal-body").find(".modal-tab").find(".tab-content").find(".tab-pane.show.active").find(".tab-pane-modal-form");
        let intIdentifierHeight = $identifier.height();
        $identifier.html(HTML_LOADING);
        let $identifierHtmlLoading = $identifier.find(".loading");
        let intHtmlLoadingHeight = $identifierHtmlLoading.height();
        intHtmlLoadingHeight = (intIdentifierHeight > intHtmlLoadingHeight) ? intIdentifierHeight : intHtmlLoadingHeight;
        $identifierHtmlLoading.height(intHtmlLoadingHeight);
        /* */
        $identifierDivModal.find(".modal-content").find(".modal-body").find(".modal-tab").find(".tab-content").find(".tab-pane").not(".show.active").find(".tab-pane-modal-form").html(HTML_LOADING);
        $identifierDivModal.find(".btn").not(".link-div-modal-action-close").attr("disabled", "disabled");
        $identifierDivModal.find(".btn").not(".link-div-modal-action-close").addClass("disabled");
    }

    function HTMLDivModalACTIONLOGIN(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action"),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOADFromSecurityLogin();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.INT_IS_VALID_FORM === 1) {
                            HTMLDivModalSHOWMESSAGEOK(data);
                            HTMLApplicationRELOAD();
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-content").find(".modal-body").find(".modal-tab").find(".tab-content").find(".tab-pane.show.active").find(".tab-pane-modal-form").find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-content").find(".modal-body").find(".modal-tab").find(".tab-content").find(".tab-pane.show.active").find(".tab-pane-modal-form").find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONLOGOUT(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action"),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        HTMLDivModalSHOWMESSAGEOK(data);
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONPROFILE(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action"),
            data: new FormData(this),
            type: $form.attr("method"),
            dataType: "json",
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            HTMLApplicationRELOAD();
                            /* */
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONCREATE(event) {
        event.preventDefault();
        let $form = $(this);
        let stringUrl = "";
        if ($("#button-submit-create").hasClass("active")) {
            stringUrl = "?action-create=active&search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val());
        }
        else {
            if ($("#button-submit-create-and-update").hasClass("active")) {
                stringUrl = "?action-create-and-update=active&search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val());
            }
        }
        $.ajax({
            url: $form.attr("action") + stringUrl,
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONCREATEFromAdministrationDocumentationDocument(event) {
        event.preventDefault();
        let $form = $(this);
        let tabActive = "";
        let contentActive = "";
        let stringUrl = "";
        if ($("#button-submit-create").hasClass("active")) {
            stringUrl = "?action-create=active&search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val());
        }
        else {
            if ($("#button-submit-create-and-update").hasClass("active")) {
                stringUrl = "?action-create-and-update=active&search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val());
            }
        }
        $.ajax({
            url: $form.attr("action") + stringUrl,
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                if ($identifierDivModal.find(".modal-tab").find("#tab-en").hasClass("active")) {
                    tabActive = "#tab-en";
                    contentActive = "#content-en";
                }
                if ($identifierDivModal.find(".modal-tab").find("#tab-es").hasClass("active")) {
                    tabActive = "#tab-es";
                    contentActive = "#content-es";
                }
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        /* */
                        $identifierDivModal.find(".modal-tab").find(".nav-tabs").find(".nav-item").removeClass("active").attr("aria-selected", "false");
                        $identifierDivModal.find(".modal-tab").find(".tab-content").find(".tab-pane").removeClass("show active");
                        $identifierDivModal.find(".modal-tab").find(".nav-tabs").find(tabActive).addClass("active").attr("aria-selected", "true");
                        $identifierDivModal.find(".modal-tab").find(".tab-content").find(contentActive).addClass("show active");
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONUPDATE(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action") + "?search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val()),
            data: new FormData(this),
            type: $form.attr("method"),
            dataType: "json",
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONUPDATEFromAdministrationDocumentationDocument(event) {
        event.preventDefault();
        let $form = $(this);
        let tabActive = "";
        let contentActive = "";
        $.ajax({
            url: $form.attr("action") + "?search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val()),
            data: new FormData(this),
            type: $form.attr("method"),
            dataType: "json",
            cache: false,
            processData: false,
            contentType: false,
            beforeSend: function () {
                if ($identifierDivModal.find(".modal-tab").find("#tab-en").hasClass("active")) {
                    tabActive = "#tab-en";
                    contentActive = "#content-en";
                }
                if ($identifierDivModal.find(".modal-tab").find("#tab-es").hasClass("active")) {
                    tabActive = "#tab-es";
                    contentActive = "#content-es";
                }
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                        /* */
                        $identifierDivModal.find(".modal-tab").find(".nav-tabs").find(".nav-item").removeClass("active").attr("aria-selected", "false");
                        $identifierDivModal.find(".modal-tab").find(".tab-content").find(".tab-pane").removeClass("show active");
                        $identifierDivModal.find(".modal-tab").find(".nav-tabs").find(tabActive).addClass("active").attr("aria-selected", "true");
                        $identifierDivModal.find(".modal-tab").find(".tab-content").find(contentActive).addClass("show active");
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONDELETE(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action") + "?search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val()),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            HTMLDivModalSHOWMESSAGEOK(data);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONAPPROVE(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action") + "?search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val()),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            HTMLDivModalSHOWMESSAGEOK(data);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONDISAPPROVE(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action") + "?search=" + $.trim($identifierDivCenterDivContentSearchFormInput.val()),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivCenterDivContentTableTbody.html(data.HTML_DIV_CENTER_DIV_CONTENT_TABLE_TBODY);
                            $identifierDivCenterDivContentPagination.html(data.HTML_DIV_CENTER_DIV_CONTENT_PAGINATION);
                            HTMLDivCenterDivContentTableTbodyAndPaginationTREERELOAD();
                            /* */
                            HTMLDivModalSHOWMESSAGEOK(data);
                        }
                        else {
                            $identifierDivModal.html(data.HTML_DIV_MODAL);
                            $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                        }
                    }
                    else {
                        $identifierDivModal.html(data.HTML_DIV_MODAL);
                        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    }
                }
            }
        });
    }

    function HTMLDivModalACTIONREFRESH(event) {
        event.preventDefault();
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivModal.html(data.HTML_DIV_MODAL);
                    $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                }
            }
        });
    }

    function HTMLDivModalACTIONREFRESHFromSecurityLogin(event) {
        event.preventDefault();
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalContentModalBodySHOWLOADFromSecurityLogin();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivModal.html(data.HTML_DIV_MODAL);
                    $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                }
            }
        });
    }

    function HTMLDivModalACTIONREFRESHFromAdministrationDocumentationDocument(event) {
        event.preventDefault();
        let $this = $(this);
        let tabActive = "";
        let contentActive = "";
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                if ($identifierDivModal.find(".modal-tab").find("#tab-en").hasClass("active")) {
                    tabActive = "#tab-en";
                    contentActive = "#content-en";
                }
                if ($identifierDivModal.find(".modal-tab").find("#tab-es").hasClass("active")) {
                    tabActive = "#tab-es";
                    contentActive = "#content-es";
                }
                HTMLDivModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivModal.html(data.HTML_DIV_MODAL);
                    $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
                    /* */
                    $identifierDivModal.find(".modal-tab").find(".nav-tabs").find(".nav-item").removeClass("active").attr("aria-selected", "false");
                    $identifierDivModal.find(".modal-tab").find(".tab-content").find(".tab-pane").removeClass("show active");
                    $identifierDivModal.find(".modal-tab").find(".nav-tabs").find(tabActive).addClass("active").attr("aria-selected", "true");
                    $identifierDivModal.find(".modal-tab").find(".tab-content").find(contentActive).addClass("show active");
                }
            }
        });
    }

    function HTMLDivModalACTIONCLOSE(event) {
        event.preventDefault();
        $identifierDivModal.modal("hide");
        $identifierDivModal.html("");
    }

    function HTMLDivModalACTIONLOCALE(event) {
        event.preventDefault();
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalSHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalSHOWMESSAGEERROR(data);
                }
                else {
                    HTMLDivModalSHOWMESSAGEOK(data);
                    HTMLApplicationRELOAD();
                }
            }
        });
    }

    function HTMLDivModalSHOWMESSAGEERROR(data) {
        $identifierDivModal.html(data.HTML_DIV_MODAL);
        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
        $identifierDivModal.modal("show");
        let intMessageState = 0;

        function modalMessageClose1() {
            if ($identifierDivModal.find(".modal-message").find(".alert").find("button.link-alert-action-close").length <= 1) {
                modalMessageClose();
            }
        }

        function modalMessageClose2() {
            if (intMessageState === 0) {
                modalMessageClose();
            }
        }

        function modalMessageClose() {
            $identifierDivModal.find(".modal-message").find(".alert").off("click", "button.link-alert-action-close");
            $identifierDivModal.modal("hide");
            $identifierDivModal.html("");
            intMessageState = 1;
            if (typeof(data.BOOLEAN_WITHOUT_PERMISSION) !== "undefined" && data.BOOLEAN_WITHOUT_PERMISSION === true) {
                window.location.replace(data.URL_REDIRECT);
            }
        }

        $identifierDivModal.find(".modal-message").find(".alert")
            .off("click", "button.link-alert-action-close")
            .on("click", "button.link-alert-action-close", modalMessageClose1);

        function modalMessageAlertClose() {
            if (intMessageState === 0) {
                $identifierDivModal.find(".modal-message").fadeOut("slow", function () {
                    modalMessageClose2();
                });
            }
        }

        setTimeout(modalMessageAlertClose, 5000);
    }

    function HTMLDivModalSHOWMESSAGEOK(data) {
        $identifierDivModal.html(data.HTML_DIV_MODAL);
        $identifierDivModal.find(".modal-message").html(data.HTML_DIV_MODAL_MESSAGE);
        $identifierDivModal.modal("show");
        let intMessageState = 0;

        function modalMessageClose1() {
            if ($identifierDivModal.find(".modal-message").find(".alert").find("button.link-alert-action-close").length <= 1) {
                modalMessageClose();
            }
        }

        function modalMessageClose2() {
            if (intMessageState === 0) {
                modalMessageClose();
            }
        }

        function modalMessageClose() {
            $identifierDivModal.find(".modal-message").find(".alert").off("click", "button.link-alert-action-close");
            $identifierDivModal.modal("hide");
            $identifierDivModal.html("");
            intMessageState = 1;
            if (typeof(data.BOOLEAN_WITHOUT_PERMISSION) !== "undefined" && data.BOOLEAN_WITHOUT_PERMISSION === true) {
                window.location.replace(data.URL_REDIRECT);
            }
        }

        $identifierDivModal.find(".modal-message").find(".alert")
            .off("click", "button.link-alert-action-close")
            .on("click", "button.link-alert-action-close", modalMessageClose1);

        function modalMessageAlertClose() {
            if (intMessageState === 0) {
                $identifierDivModal.find(".modal-message").fadeOut("slow", function () {
                    modalMessageClose2();
                });
            }
        }

        setTimeout(modalMessageAlertClose, 3000);
    }

    function HTMLDivModalModalRELOAD() {
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                $identifierDivModal.modal("hide");
                HTMLDivModalModalSHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                    $identifierDivModalModal.find(".modal-message").html(data.HTML_DIV_MODAL_MODAL_MESSAGE);
                }
            }
        });
    }

    function HTMLDivModalModalSHOWLOAD() {
        $identifierDivModalModal.html("<div class='modal-dialog modal-sm'><div class='modal-content'>" + HTML_LOADING + "</div></div>");
        $identifierDivModalModal.modal("show");
    }

    function HTMLDivModalModalModalContentModalBodySHOWLOAD() {
        let $identifier = $identifierDivModalModal.find(".modal-content").find(".modal-body");
        let intIdentifierHeight = $identifier.height();
        $identifier.html(HTML_LOADING);
        let $identifierHtmlLoading = $identifier.find(".loading");
        let intHtmlLoadingHeight = $identifierHtmlLoading.height();
        intHtmlLoadingHeight = (intIdentifierHeight > intHtmlLoadingHeight) ? intIdentifierHeight : intHtmlLoadingHeight;
        $identifierHtmlLoading.height(intHtmlLoadingHeight);
        /* */
        $identifierDivModalModal.find(".btn").not(".link-div-modal-modal-action-close").attr("disabled", "disabled");
        $identifierDivModalModal.find(".btn").not(".link-div-modal-modal-action-close").addClass("disabled");
    }

    function HTMLDivModalModalACTIONSUBMITKeepDivModal(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action"),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                            $identifierDivModalModal.find(".modal-message").html(data.HTML_DIV_MODAL_MODAL_MESSAGE);
                        }
                        else {
                            $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                        }
                    }
                    else {
                        $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                    }
                }
            }
        });
    }

    function HTMLDivModalModalACTIONSUBMITCloseDivModal(event) {
        event.preventDefault();
        let $form = $(this);
        $.ajax({
            url: $form.attr("action"),
            data: $form.serialize(),
            type: $form.attr("method"),
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalModalSHOWMESSAGEERROR(data);
                }
                else {
                    if (data.BOOLEAN_IS_METHOD_POST) {
                        if (data.BOOLEAN_IS_VALID_FORM) {
                            HTMLDivModalModalSHOWMESSAGEOK(data);
                        }
                        else {
                            $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                        }
                    }
                    else {
                        $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                    }
                }
            }
        });
    }

    function HTMLDivModalModalACTIONREFRESH(event) {
        event.preventDefault();
        let $this = $(this);
        $.ajax({
            url: $this.attr("data-url"),
            type: "get",
            dataType: "json",
            beforeSend: function () {
                HTMLDivModalModalModalContentModalBodySHOWLOAD();
            },
            success: function (data) {
                if (data.BOOLEAN_ERROR) {
                    HTMLDivModalModalSHOWMESSAGEERROR(data);
                }
                else {
                    $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
                    $identifierDivModalModal.find(".modal-message").html(data.HTML_DIV_MODAL_MODAL_MESSAGE);
                }
            }
        });
    }

    function HTMLDivModalModalACTIONCLOSE(event) {
        event.preventDefault();
        $identifierDivModalModal.modal("hide");
        $identifierDivModalModal.html("");
        $identifierDivModal.modal("show");
    }

    function HTMLDivModalModalSHOWMESSAGEERROR(data) {
        $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
        $identifierDivModalModal.find(".modal-message").html(data.HTML_DIV_MODAL_MODAL_MESSAGE);
        $identifierDivModalModal.modal("show");
        let intMessageState = 0;

        function modalMessageClose1() {
            if ($identifierDivModalModal.find(".modal-message").find(".alert").find("button.link-alert-action-close").length <= 1) {
                modalMessageClose();
            }
        }

        function modalMessageClose2() {
            if (intMessageState === 0) {
                modalMessageClose();
            }
        }

        function modalMessageClose() {
            $identifierDivModalModal.find(".modal-message").find(".alert").off("click", "button.link-alert-action-close");
            $identifierDivModalModal.modal("hide");
            $identifierDivModalModal.html("");
            $identifierDivModal.modal("show");
            intMessageState = 1;
            if (typeof(data.BOOLEAN_WITHOUT_PERMISSION) !== "undefined" && data.BOOLEAN_WITHOUT_PERMISSION === true) {
                window.location.replace(data.URL_REDIRECT);
            }
        }

        $identifierDivModalModal.find(".modal-message").find(".alert")
            .off("click", "button.link-alert-action-close")
            .on("click", "button.link-alert-action-close", modalMessageClose1);

        function modalMessageAlertClose() {
            if (intMessageState === 0) {
                $identifierDivModalModal.find(".modal-message").fadeOut("slow", function () {
                    modalMessageClose2();
                });
            }
        }

        setTimeout(modalMessageAlertClose, 5000);
    }

    function HTMLDivModalModalSHOWMESSAGEOK(data) {
        $identifierDivModalModal.html(data.HTML_DIV_MODAL_MODAL);
        $identifierDivModalModal.find(".modal-message").html(data.HTML_DIV_MODAL_MODAL_MESSAGE);
        $identifierDivModalModal.modal("show");
        let intMessageState = 0;

        function modalMessageClose1() {
            if ($identifierDivModalModal.find(".modal-message").find(".alert").find("button.link-alert-action-close").length <= 1) {
                modalMessageClose();
            }
        }

        function modalMessageClose2() {
            if (intMessageState === 0) {
                modalMessageClose();
            }
        }

        function modalMessageClose() {
            $identifierDivModalModal.find(".modal-message").find(".alert").off("click", "button.link-alert-action-close");
            $identifierDivModalModal.modal("hide");
            $identifierDivModalModal.html("");
            $identifierDivModal.modal("show");
            intMessageState = 1;
            if (typeof(data.BOOLEAN_WITHOUT_PERMISSION) !== "undefined" && data.BOOLEAN_WITHOUT_PERMISSION === true) {
                window.location.replace(data.URL_REDIRECT);
            }
        }

        $identifierDivModalModal.find(".modal-message").find(".alert")
            .off("click", "button.link-alert-action-close")
            .on("click", "button.link-alert-action-close", modalMessageClose1);

        function modalMessageAlertClose() {
            if (intMessageState === 0) {
                $identifierDivModalModal.find(".modal-message").fadeOut("slow", function () {
                    modalMessageClose2();
                });
            }
        }

        setTimeout(modalMessageAlertClose, 3000);
    }

    HTMLApplicationRELOAD();
});
