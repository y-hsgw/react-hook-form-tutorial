import React from "react";
import { useHooks } from "./hooks";
import "./style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  } = useHooks();

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <h2>問い合わせフォーム</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>氏名</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>入力必須項目です</span>}
        <label>フリガナ</label>
        <input {...register("furigana", { required: true })} />
        {errors.furigana && <span>入力必須項目です</span>}
        <label>メールアドレス</label>
        <input
          {...register("email", {
            required: true,
            pattern:
              /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
          })}
        />
        {errors.email?.type === "required" && <span>入力必須項目です</span>}
        {errors.email?.type === "pattern" && (
          <span>不適切なメールアドレスです</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
