import { catalogApi } from './api/api';
import { appendEl } from './appendElement';

const wrapper = document.querySelector('#catalog-wrapper');

const setCatalog = () => {
  catalogApi.get().then(data => {
    wrapper.innerHTML = '';

    data.map(setProductItem);
  })
};

function setProductItem(item) {
  const itemWrapper = appendEl('div', wrapper);

  itemWrapper.className = 'catalog__item';

  const img = appendEl('img', itemWrapper);

  img.src = item.src;
  img.className = 'catalog__img';

  appendEl('h4', itemWrapper).textContent = item.title;
  appendEl('small', itemWrapper).textContent = `Quantity: ${item.stock}`;
}

export { setCatalog };
