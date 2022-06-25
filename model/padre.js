import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { gethijo } from "../model/hijo.js";

const padre = getData.sequelizeClient.define('tbl_padredb', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ap_paterno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: 'This username is already taken.'
        },
    },
    ap_materno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edad: {
        type: DataTypes.STRING,
        allowNull: false,
    },


}, {
    tableName: 'tbl_padredb',
    freezeTableName: true,
    hooks: {
        beforeCreate: (user, 
            ) => {
            {
                user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, 10) : "";
            }
        }
    }

});

padre.hasMany(gethijo,{
    foringnkey: "id_hijo",
});

gethijo.belongsTo(padre);



export const getpadre = padre;