// import { ExerciseModel } from "../models/exercise.model";
// import { UnitModel } from "../models/unit.model";
// import { ThemeModel } from "../models/theme.model";
// import { UserModel } from "../models/user.model.js";
// import { ObservationModel } from "../models/observation.model";
// import { ProgressModel } from "../models/progress.model";
// import { UnitProgressTable } from "../models/unit_progress.table";
// import { ThemeProgressTable } from "../models/theme_progress.table";
// import { ExerciseProgressTable } from "../models/exercise_progress.table.js";
// import db from "./db";
// import executeAllSeeds from "../seeds/index.js";
// import app from "../app";
// import environments from "../environments/index.js";

// UnitModel.hasMany(ThemeModel, { foreignKey: "unitId" });
// ThemeModel.belongsTo(UnitModel, { foreignKey: "unitId" });
// ThemeModel.hasMany(ExerciseModel, { foreignKey: "themeId" });
// ExerciseModel.belongsTo(ThemeModel, { foreignKey: "themeId" });

// ProgressModel.hasOne(UserModel, {
//     foreignKey: 'progressId',
//     sourceKey: 'id' 
// })
// UserModel.belongsTo(ProgressModel, {
//     foreignKey: 'progressId',
//     targetKey: 'id'
// })

// ProgressModel.belongsToMany(UnitModel, { through: UnitProgressTable })
// UnitModel.belongsToMany(ProgressModel, { through: UnitProgressTable })

// ProgressModel.belongsToMany(ThemeModel, { through: ThemeProgressTable })
// ThemeModel.belongsToMany(ProgressModel, { through: ThemeProgressTable })

// ProgressModel.belongsToMany(ExerciseModel, { through: ExerciseProgressTable })
// ExerciseModel.belongsToMany(ProgressModel, { through: ExerciseProgressTable })

// ObservationModel.hasOne(ExerciseProgressTable, {
//     foreignKey: 'observationsId',
//     sourceKey: 'id'
// })
// ExerciseProgressTable.belongsTo(ObservationModel, {
//     foreignKey: 'observationsId',
//     targetKey: 'id'
// })

// const initDataBase = () => {
//     db.sync({ alt
//      true, logging: false })
//         .then(() => {
//             console.log('Tables created.');
//             executeAllSeeds()
//             app.listen(environments.PORT, () => {
//                 console.log(`Server listening on port ${environments.PORT}`)
//             })
//         })
// }

// export default initDataBase