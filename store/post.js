export const state = () => ({
  all : [
    {
      id: 'Iwaco',
      title: 'Iwaco (Inwi Maroc)',
      content:
        ' st le faux texte standard de l\'imprimerie depuis les anné'
    },
    {
      id: 'Vallesud',
      title: 'Vallesud RamasseTout',
      content:
        ' qui quod? Architecto atque dolor ea, inventore molestias nisi'
    },
    {
      id: 'PGA',
      title: 'PGA (Prevas santé)',
      content:
        ' ndard. De nombreuses suites logicielles de mise en page '
    }
  ]
});
export const mutations = {
  add (state, projet) {
    state.all.push(projet)
  },
  remove (state, { todo }) {
    state.all.splice(state.all.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
};
