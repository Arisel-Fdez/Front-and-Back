import { getData } from "./db.js";
import { DataTypes } from "sequelize";
import { getpadre } from "../model/padre.js";

const User = getData.sequelizeClient.define('tbl_usersdb', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
            msg: 'This username is already taken.'
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: DataTypes.STRING,


}, {
    tableName: 'tbl_usersdb',
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

User.hasMany(getpadre,{
    foringnkey: "id_user",
});

getpadre.belongsTo(User);



export const getUser = User;