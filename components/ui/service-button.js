function ServiceButton(props) {
  const { formStep, forward, back, isValid } = props;

  if (formStep > 3) {
    return undefined;
  } else if (formStep === 0) {
    return (
      <div className=" py-4">
        {/* next */}
        <button
          disabled={!isValid}
          className={`w-full rounded-2xl ${
            !isValid ? "bg-orange-300" : "bg-orange-500"
          } text-gray-50 text-lg py-2 px-4`}
          type="button"
          onClick={forward}
        >
          Next
        </button>
      </div>
    );
  } else if (formStep === 3) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-2">
        {/* back */}
        <button
          className="w-full rounded-2xl bg-orange-500 text-gray-50 text-lg py-2 px-4"
          type="button"
          onClick={back}
        >
          Back
        </button>
        <button
          disabled={!isValid}
          className={`w-full rounded-2xl ${
            !isValid ? "bg-orange-300" : "bg-orange-500"
          } text-gray-50 text-lg py-2 px-4`}
          type="submit"
        >
          Submit Request
        </button>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 items-center py-4 gap-2">
        {/* back */}
        <button
          className="w-full rounded-2xl bg-orange-500 text-gray-50 text-lg py-2 px-4"
          type="button"
          onClick={back}
        >
          Back
        </button>
        {/* next */}
        <button
          disabled={!isValid}
          className={`w-full rounded-2xl ${
            !isValid ? "bg-orange-300" : "bg-orange-500"
          } text-gray-50 text-lg py-2 px-4`}
          type="button"
          onClick={forward}
        >
          Next
        </button>
      </div>
    );
  }
}

export default ServiceButton;
