const userModel = require('../model/userModel.js')
module.exports = {
    register: async (req, res) => {
        try {
            const { fullName, mobileNo, email, password } = req.body;
            const checkemail = await userModel.findOne({ email: email })
            if (checkemail) {
                return res.status(400).json({ message: 'email is already exists' });
            }
            const checkContact = await userModel.findOne({ mobileNo: mobileNo })
            if (checkContact) {
                return res.status(400).json({ message: 'contact_no is already used' });
            }
            const data = new userModel({ fullName, mobileNo, email, password })
            const save = await data.save()
            return res.status(200).json({
                success: true,
                message: "user is registered successfully",
                data: save
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!(email && password)) {
                return res.status(400).json({ success: false, message: "All Inputs Are Required" });
            }
            const userDetail = await userModel.findOne({ email: email });
            if (userDetail) {
                if (userDetail.password == password) {
                    res.status(200).json({
                        success: true,
                        message: 'login successfully',
                        data: userDetail
                    })
                } else {
                    res.status(400).json({
                        success: false,
                        message: 'password is incorrect'
                    })
                }
            } else {
                res.status(400).json({
                    success: false,
                    message: 'user not found'
                })
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const find = await userModel.find()
            if (find.length > 0) {
                res.status(200).json({
                    success: true,
                    message: 'get users successfully',
                    data: find
                })
            } else {
                res.status(200).json({
                    success: true,
                    message: 'users not found'
                })
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }

}