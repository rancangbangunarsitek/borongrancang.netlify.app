jQuery(document).ready((o=>{let t=window.location.hash;if(t){let i=t.split("_");if("#variation"!==i[0])return!1;o(".product_data_tabs .variations_options a").trigger("click"),o("#woocommerce-product-data").on("woocommerce_variations_loaded",(function(){"use strict";let t=o(".woocommerce_variations").find(`input[value=${i[1]}]`).parent("h3");t.length>0&&(t.trigger("click"),o("html, body").animate({scrollTop:t.offset().top-30},"slow"))}))}}));