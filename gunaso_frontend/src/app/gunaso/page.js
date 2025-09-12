"use client";
import {
  Button,
  TextInput,
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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/gunaso`,
        payload
      );
      alert("Gunas submitted successfully!");
      setFullName("");
      setSelectedCategory(null);
      setGunasotext("");
      setDate(null);
      setSeverity("Minor");
    } catch (error) {
      console.error("Error submitting gunaso:", error);
      alert("Failed to submit gunaso. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-15 items-center justify-center">
      <h1>Gunaso</h1>

      <Form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>
        <TextInput
          labelText="Full Name"
          placeholder="Enter Your Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <Dropdown
          id="carbon-dropdown"
          titleText="Select an issue type"
          label="Issue Type"
          items={categories}
          itemToString={(item) => (item ? item.text : "")}
          selectedItem={selectedCategory}
          onChange={(e) => setSelectedCategory(e.selectedItem)}
        />

        <TextInput
          labelText="Enter your gunaso"
          placeholder="Enter Your Gunaso"
          value={gunasoText}
          onChange={(e) => setGunasotext(e.target.value)}
        />

        <label className="text-zinc-400 text-xs block">
          Select Date
          <input
            className="w-full bg-zinc-100 p-3 border-b-1 border-gray-400 rounded"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <RadioButtonGroup
          orientation="horizontal"
          legendText="Select the severity of the issue"
          name="radio-button-group-3"
          defaultSelected="Minor"
          valueSelected={severity}
          onChange={(e) => setSeverity(e)}
        >
          <RadioButton labelText="Minor" value="Minor" id="Minor" />
          <RadioButton labelText="Major" value="Major" id="Major" />
          <RadioButton labelText="Critical" value="Critical" id="Critical" />
        </RadioButtonGroup>

        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}
