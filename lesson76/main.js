function searchAnimal(targetId) {
    const animals = [
        { id: 1, name: 'dog' },
        { id: 2, name: 'cat' },
        { id: 3, name: 'bird' },
        { id: 4, name: 'lion' },
        { id: 5, name: 'fox' }
    ];

    // animalsを検索
    const targetAnimal = animals.find((animal) => animal.id === targetId);

    // 値が存在しない場合「null」を表示
    if (targetAnimal === undefined) {
        return null;
    }

    return targetAnimal.name;
}

  console.log(searchAnimal(1)); // 結果: dog
  console.log(searchAnimal(3)); // 結果: bird
  console.log(searchAnimal(5)); // 結果: fox
  console.log(searchAnimal(7)); // 結果: null