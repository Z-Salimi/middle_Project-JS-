// ======================== create and render images ========================
function createImages(src, className) {
  return `  
                <img
                  class="w-full h-[30vh] ${className}"
                  src="${src}"
                  alt=""
                />
           `;
}

export function renderImages(images) {
  if (images.includes("|")) {
    images = images.split("|");
    return images
      .map((item) => {
        return createSizes(item);
      })
      .join(" ");
  } else return createImages(images);
}


// ======================== create and render size ========================
function createSizes(src, className = "") {
  return ` <div
                  class="border-2 border-app-grey rounded-full size-9 shrink-0 flex justify-center items-center ${className}"
                >
                  ${src}
                </div>`;
}

export function renderSizes(sizes, select) {
  if (sizes.includes("|")) {
    sizes = sizes.split("|");
    if (!select) select = sizes[0];
    return sizes
      .map((item) => {
        if (item === select) {
          return createSizes(item, "bg-app-grey text-white");
        } else return createSizes(item);
      })
      .join(" ");
  } else return createSizes(sizes, "bg-app-grey text-white");
}

// ======================== create and render color ========================
function createColors(item, src = "") {
  if (item === "black" && src !== "") {
    src = "img/check-mark-black-outline-svgrepo-com.svg";
  }
  return `  <div
                  class="flex justify-center items-center border-2 rounded-full  w-[36px] h-[36px]  shrink-0" style="background-color : ${item};"
                >
                 <img
                    class="${src ? "w-[20px] h-[20px] " : ""} " 
                    src="${src}"
                    alt=""
                  />
                </div>`;
}

export function renderColors(colors, select) {
  if (colors.includes("|")) {
    colors = colors.split("|");
    if (!select) select = colors[0];
    return colors
      .map((item) => {
        if (item === select) {
          return createColors(item, "img/check-mark-svgrepo-com.svg");
        } else return createColors(item);
      })
      .join(" ");
  } else return createColors(colors, "img/check-mark-svgrepo-com.svg");
}

