"use client";

import { useState } from "react";
import InputField from "@/components/ui/common/InputField";
import { createTeacher } from "@/services/schooladmin/teachers.service";
import { MAIN_COLOR } from "@/constants/colors";
import { toast } from "@/services/toast/toast.service";

interface AddTeacherFormProps {
  onSuccess?: () => void; // to close modal after submit
}

export default function AddTeacherForm({ onSuccess }: AddTeacherFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    await createTeacher({
      name,
      email,
      password,
      mobile: phone,
    });
    toast.success("Teacher created successfully");
    onSuccess?.(); 
  } catch (error) {
    console.error("Failed to create teacher", error);
    alert("Failed to create teacher");
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Teacher Name */}
      <InputField
        label="Teacher Name"
        placeholder="Enter full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Email */}
      <InputField
        label="Email"
        type="email"
        placeholder="teacher@school.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password */}
      <InputField
        label="Password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Mobile Number */}
      <InputField
        label="Mobile Number"
        placeholder="Enter mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        style={{ backgroundColor: MAIN_COLOR }}
        className="
          w-full
          py-3
          rounded-xl
          text-sm
          font-medium
          text-white
          hover:opacity-90
          transition
          disabled:opacity-60
        "
      >
        {loading ? "Adding..." : "Add Teacher"}
      </button>
    </form>
  );
}
