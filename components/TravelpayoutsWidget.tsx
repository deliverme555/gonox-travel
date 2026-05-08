type TravelpayoutsWidgetProps = {
  type: "flights" | "hotels" | "cars";
  campaignId: string;
};

export default function TravelpayoutsWidget({
  type,
  campaignId,
}: TravelpayoutsWidgetProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-slate-900">
        Travelpayouts {type} widget
      </p>
      <p className="mt-2 text-sm text-slate-600">Campaign ID: {campaignId}</p>
      {/* TODO: Inject real Travelpayouts script for {type} campaign here. */}
      {/* Example target: replace this placeholder with script-based widget mount. */}
      <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">
        Affiliate widget placeholder ready for script injection.
      </div>
    </div>
  );
}
