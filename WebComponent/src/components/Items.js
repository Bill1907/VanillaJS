import Component from "../core/Component.js";

class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
            <ul>
              ${items
                .map(
                  (item, key) => `
                <li>
                  ${item}
                  <button class="delete-btn" data-index="${key}">삭제</button>
                </li>
                `
                )
                .join("")}
            </ul> 
            <button class="add-btn">추가</button>
        `;
  }
  setEvent() {
    this.$target.addEventListener("click", ({ target }) => {
      const { items } = this.$state;

      if (target.classList.contains("add-btn")) {
        this.setState({ items: [...items, `item${items.length + 1}`] });
      }

      if (target.classList.contains("delete-btn")) {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
}

export default Items;
