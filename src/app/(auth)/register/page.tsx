import RegisterForm from './register-form'

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <h1 className=" font-bold">Đăng ký</h1>

      <div>
        <RegisterForm />
      </div>
    </div>
  )
}
