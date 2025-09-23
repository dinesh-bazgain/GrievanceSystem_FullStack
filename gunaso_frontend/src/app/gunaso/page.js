"use client";
import {
  Button,
  Dropdown,
  Form,
  RadioButtonGroup,
  RadioButton,
} from "@carbon/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function GunasoForm() {
  const [categories, setCategories] = useState([]);
  const [fullName, setFullName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gunasoText, setGunasotext] = useState("");
  const [date, setDate] = useState("");
  const [severity, setSeverity] = useState("Minor");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        const formatted = response.data
          .filter((cat) => cat.is_active)
          .map((cat) => ({ id: cat.id, text: cat.name_en }));
        setCategories(formatted);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !selectedCategory || !gunasoText || !date || !severity) {
      alert("Please fill in all fields.");
      return;
    }

    const payload = {
      fullName,
      categoryId: Number(selectedCategory.id),
      category: selectedCategory.text,
      gunasoText,
      date,
      severity,
    };

    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/gunaso`, payload);
      alert("Gunaso submitted successfully!");
      setFullName("");
      setSelectedCategory(null);
      setGunasotext("");
      setDate("");
      setSeverity("Minor");
    } catch (error) {
      console.error("Error submitting gunaso:", error);
      alert("Failed to submit gunaso. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gunasoRegistration min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-50 p-10">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-gray-100 px-10 py-12">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-12 tracking-wide">
          Submit Your Gunaso
        </h1>

        <Form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-4 pl-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm placeholder-gray-400"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-4 pl-1">
              Issue Category
            </label>
            <Dropdown
              id="carbon-dropdown"
              label="Select Category"
              items={categories}
              itemToString={(item) => (item ? item.text : "")}
              selectedItem={selectedCategory}
              onChange={(e) => setSelectedCategory(e.selectedItem)}
              className="w-full"
            />
          </div>

          {/* Gunaso Text */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-4 pl-1">
              Your Gunaso
            </label>
            <textarea
              rows="5"
              placeholder="Describe your issue in detail..."
              value={gunasoText}
              onChange={(e) => setGunasotext(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm placeholder-gray-400 resize-none"
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-4 pl-1">
              Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Severity */}
          <div className="mb-4">
            <RadioButtonGroup
              orientation="horizontal"
              legendText="Severity of the issue"
              name="severity-group"
              valueSelected={severity}
              onChange={(e) => setSeverity(e)}
              className="flex gap-8"
            >
              <RadioButton labelText="Minor" value="Minor" id="Minor" />
              <RadioButton labelText="Major" value="Major" id="Major" />
              <RadioButton
                labelText="Critical"
                value="Critical"
                id="Critical"
              />
            </RadioButtonGroup>
          </div>

          {/* Submit - Centered */}
          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              disabled={loading}
              className="!bg-indigo-600 !text-white !px-10 !py-4 !rounded-xl !font-semibold hover:!bg-indigo-700 shadow-md transition-transform transform hover:scale-105"
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
