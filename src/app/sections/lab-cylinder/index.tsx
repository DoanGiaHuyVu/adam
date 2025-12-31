import { Experiment } from "../../../lib/types";
import { Cyllinder } from "../../components/cyllinder";

import experimentsData from "../../../data/experiments.json";

export const LabCylinder = async () => {
  const experiments = experimentsData as unknown as Experiment[];

  const filteredExperiments = experiments.filter(
    (experiment) => experiment.og !== null
  );

  return <Cyllinder experiments={filteredExperiments} />;
};
