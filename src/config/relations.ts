import { ExerciseModel } from "../models/exercise.model";
import { UnitModel } from "../models/unit.model";
import { ThemeModel } from "../models/theme.model";
import { UserModel } from "../models/user.model";
import { ObservationModel } from "../models/observation.model";
import { ProgressModel } from "../models/progress.model";
import { UnitProgressTable } from "../models/unit_progress.table";
import { ThemeProgressTable } from "../models/theme_progress.table";
import { ExerciseProgressTable } from "../models/exercise_progress.table";

import { QuestionModel } from "../models/question.model";
import { OptionModel } from "../models/option.model";
import { EvaluationModel } from "../models/evaluation.model";
import { LevelModel } from "../models/level.model";
import { EvaluationResponsesTable } from "../models/evaluation_responses.table";


export const associations = () => {
    return new Promise((res, rej) => {
        try {
            UnitModel.hasMany(ThemeModel, { foreignKey: "unitId" });
            ThemeModel.belongsTo(UnitModel, { foreignKey: "unitId" });
            ThemeModel.hasMany(ExerciseModel, { foreignKey: "themeId" });
            ExerciseModel.belongsTo(ThemeModel, { foreignKey: "themeId" });

            ProgressModel.hasOne(UserModel, {
                foreignKey: 'progressId',
                sourceKey: 'id' 
            })
            UserModel.belongsTo(ProgressModel, {
                foreignKey: 'progressId',
                targetKey: 'id'
            })

            ProgressModel.belongsToMany(UnitModel, { through: UnitProgressTable })
            UnitModel.belongsToMany(ProgressModel, { through: UnitProgressTable })

            ProgressModel.belongsToMany(ThemeModel, { through: ThemeProgressTable })
            ThemeModel.belongsToMany(ProgressModel, { through: ThemeProgressTable })

            ProgressModel.belongsToMany(ExerciseModel, { through: ExerciseProgressTable })
            ExerciseModel.belongsToMany(ProgressModel, { through: ExerciseProgressTable })

            ObservationModel.hasOne(ExerciseProgressTable, {
                foreignKey: 'observationsId',
                sourceKey: 'id'
            })
            ExerciseProgressTable.belongsTo(ObservationModel, {
                foreignKey: 'observationsId',
                targetKey: 'id'
            })
            
            LevelModel.hasMany(UserModel, { foreignKey: "levelId" });
            UserModel.belongsTo(LevelModel, { foreignKey: "levelId" });

            LevelModel.hasMany(QuestionModel, { foreignKey: "levelId" });
            QuestionModel.belongsTo(LevelModel, { foreignKey: "levelId" });

            QuestionModel.hasMany(OptionModel, { foreignKey: "questionId" });
            OptionModel.belongsTo(QuestionModel, { foreignKey: "questionId" });

            LevelModel.hasMany(QuestionModel, { foreignKey: "levelId" });
            QuestionModel.hasMany(LevelModel, { foreignKey: "levelId" });

            UserModel.hasMany(EvaluationModel, { foreignKey: "userId" });
            EvaluationModel.belongsTo(UserModel, { foreignKey: "userId" });

            EvaluationModel.belongsToMany(OptionModel, { through: EvaluationResponsesTable });
            OptionModel.belongsToMany(EvaluationModel, { through: EvaluationResponsesTable });

            res({ message: "Relaciones establecidas" });

        } catch (err) {
            console.error(err);
            rej(err);
        }
    })
}