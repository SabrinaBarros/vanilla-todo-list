(() => {

  const oopsText = document.getElementById('oopsText');
  const btn_add = document.getElementById('btn_add');
  const input = document.getElementById('input');
  const ul = document.getElementById('ul');
  let totalTasks = document.getElementById('totalTasks');
  let doneTasks = document.getElementById('doneTasks');

  let count = 0;

  btn_add.addEventListener('click', () => {

    count++;
    totalTasks.innerText++;

    if (!input.value.length) {
      if (oopsText.hasAttribute('hidden')) return oopsText.removeAttribute('hidden');
      return;
    }

    if (!oopsText.hasAttribute('hidden') && input.value.length) oopsText.setAttribute('hidden', 'true');

    const li = document.createElement('li');
    li.setAttribute('id', 'row_' + count);

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'task_' + count);

    const label = document.createElement('label');
    label.setAttribute('for', 'task_' + count);
    label.innerText = input.value;

    const deleteTask = document.createElement('button');
    deleteTask.innerText = 'X';
    deleteTask.setAttribute('data-ref', 'row_' + count);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteTask);

    ul.appendChild(li);

    deleteTask.addEventListener('click', () => {

      const id = deleteTask.getAttribute('data-ref');
      const li = document.getElementById(id);

      li.remove();

      if (checkbox.checked) {

        doneTasks.innerText--;
        totalTasks.innerText--;

      } else {
        totalTasks.innerText--;
      };

    });

    checkbox.addEventListener('change', () => checkbox.checked ? doneTasks.innerText++ : doneTasks.innerText--);

  });

})();