<template>
  <div id="app">
    <Products></Products>
    <Cart></Cart>
  </div>
</template>

<script>
import Products from "./components/Products.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "App",
  components: {
    Products,
    Cart,
  },
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-size: 1px;
}
body {
  background: #d7d7d7;
  font-family: sans-serif;
  color: #000;
}

#app {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
}

.money {
  position: relative;
}
.money:after {
  content: "";
  display: block;
  width: 10px;
  height: 100%;
  background: #fdc502;
  position: absolute;
  right: -15px;
  top: 0;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #000;
}
</style>
