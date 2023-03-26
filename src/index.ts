import { AppDataSource } from "./data-source";
import { Material } from "./entity/Material";
import { StudyRecord } from "./entity/StudyRecord";
import { User } from "./entity/User";
import { FIRST_NAMES, LAST_NAMES } from "./data/Users";
import { MATERIALS } from "./data/Materials";

AppDataSource.initialize()
  .then(async () => {
    // ユーザデータを確認
    const users = await AppDataSource.manager.find(User);

    // ない場合はinsertする
    if (users.length === 0) {
      await insertUserData();
    }

    // 教材データを確認
    const materials = await AppDataSource.manager.find(Material);

    // ない場合はinsertする
    if (materials.length === 0) {
      await insertMaterialData();
    }

    // 勉強履歴テーブルに登録
    await insertStudyRecord();
  })
  .catch((error) => console.log(error));

const insertUserData = async () => {
  const users = [];
  for (let i = 0; i < 100; i++) {
    const user = new User();
    user.firstName =
      FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
    user.lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    user.age = Math.floor(Math.random() * 54) + 6;
    users.push(user);
  }
  await AppDataSource.manager.save(users, { chunk: 100 });
};

const insertMaterialData = async () => {
  const materials = [];
  for (let i = 0; i < MATERIALS.length; i++) {
    const material = new Material();
    material.name = MATERIALS[i];
    materials.push(material);
  }
  await AppDataSource.manager.save(materials, { chunk: 100 });
};

const insertStudyRecord = async () => {
  // ユーザデータと教材データの取得
  const users = await AppDataSource.manager.find(User);
  const materials = await AppDataSource.manager.find(Material);

  // 起動するたびにデータ登録件数をランダムにする
  const recordCount = Math.floor(Math.random() * 50) + 1;

  const studyRecords = [];
  const today = new Date();
  for (let i = 0; i < recordCount; i++) {
    const studyRecord = new StudyRecord();
    studyRecord.user = users[Math.floor(Math.random() * users.length)];
    studyRecord.material =
      materials[Math.floor(Math.random() * materials.length)];
    studyRecord.minutes = Math.floor(Math.random() * 111) + 10;
    studyRecord.date = today;
    studyRecords.push(studyRecord);
  }
  await AppDataSource.manager.save(studyRecords, { chunk: 100 });
};
