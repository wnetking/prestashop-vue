export default function () {
  return {
    selected: [],
    indexes: {
      start: 0,
      end: this.max - 1,
      listItem: this.listItem
    }
  }
}
