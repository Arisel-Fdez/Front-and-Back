import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { getpadre } from "../model/padre.js";

const hijo = getData.sequelizeClient.define('tbl_hijodb', {
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
    tableName: 'tbl_hijodb',
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

/*hijo.hasmany(getpadre,{
    foringnkey: "id_padre",
});

gethijo.belongsTo(hijo);*/



export const gethijo = hijo;