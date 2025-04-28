import mongoose from 'mongoose'

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://adminMiguel:apos1234@cluster-cursofullstack.3upmztd.mongodb.net/robots?retryWrites=true&w=majority&appName=Cluster-CursoFullStack')
        console.log('Conexion exitosa')
    } catch (error) {
        console.log('Error al conectar a mongoDB: ', error)
        process.exit(1)
    }
}