export function createAnySneakerCard({ pid, name, imageURL, price }) {
  return `
      <div data-id=${pid} class="flex flex-col gap-y-1">
            <div
              class=" flex justify-center items-center"
            >
              <img class="rounded-3xl h-[139px] w-[139px]" src="${imageURL}" alt="" />
            </div>
            <h4 class="text-[18px] px-2 font-bold truncate text-app-semiGrey">
              ${name}
            </h4>
            <p class="text-[16px] px-2 font-semibold text-app-semiGrey">$ ${price}</p>
          </div>`;
}
