window.onload = function() {

    setTimeout(() => {
        let iframes = document.getElementsByClassName("shopify-buy-frame");
        let theframe = iframes[3].querySelector('iframe');
        let body = theframe.contentWindow.document.querySelector('body');
        let divwithBG = body.firstChild;

        divwithBG.style.backgroundColor = "#ff362f";
      }, "500")

}

