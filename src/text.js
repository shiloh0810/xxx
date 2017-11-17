var texts = {
    "surgery": {
        title: "Surgery",
        description: "Surgery is a curative cancer treatment that basically excises a portion of your organ. It can be done efficiently. Once done, there is a chance that you would never have the same cancer again, though it is still possible that there would be recurrence. However, one thing that bothers patients most about surgery is that it has a high risk and it is hard to deal with the wound. Patients with high liver function are more suitable for using surgery since their body has to rely on the remaining portion of the organ to survive.",
    },
    "transplantation": {
        title: "Transplantation",
        description: "Transplantation is a curative cancer treatment that basically replaces your organ with another from a different person. It can be done efficiently and once done, there is a high probability that you would never have the same cancer again. However, one thing that bothers patients most about transplantation is that it involves a huge surgery process and patients would have to take immunosuppressive drugs in order to make the transplantation successful. Patients with a smaller amount of tumors are more suitable for using transplantation as to prevent the chance of recurring even after the transplantation.",
    },
    "radiofrequency ablation": {
        title: "Radiofrequency Ablation",
        description: "Radiofrequency ablation is a palliative cancer treatment that basically inserts a needle in the center of a tumor and burns it until it dies. It can be repeated several times with minimal invasion. However, one thing that bothers patients most about radiofrequency ablation is that there might be a chance of burning one of the healthy cells if calculations are not done perfectly. Also, it is common that the cancer would recur since there would be cells on the edges that are not completely burned. Patients with small-sized tumors are more suitable for using radiofrequency ablation.",
    },
    "cryo ablation": {
        title: "Cryo Ablation",
        description: "Cryo ablation is a palliative cancer treatment that basically inserts a needle in the center of a tumor and freezes it until it dies. It can be repeated several times with minimal invasion. However, one thing that bothers patients most about cryo ablation is that there might be a chance of freezing one of the healthy cells if calculations are not done perfectly. Also, it is common that the cancer would recur since there would be cells on the edges that are not completely freezed. Patients with small-sized tumors are more suitable for using cryo ablation.",
    },
    "chemotherapy": {
        title: "Chemotherapy",
        description: "Chemotherapy is a palliative and non-invasive cancer treatment that basically injects some kind of chemical into your body. However, one thing that bothers patients most about chemotherapy is that the chemical injected might be too potent that it is possible that it would kill healthy cells, resulting in a decreased immunity and patients losing their hair. Patients with blood diseases are more suitable for using chemotherapy since the chemical is likely to circulate in a patient's body.",
    },
    "radiation therapy": {
        title: "Radiation Therapy",
        description: "Radiotherapy is a palliative and non-invasive cancer treatment that basically exposes a tumor to radioactive elements in a machine to kill cancer cells. However, one thing that bothers patients most about radiation therapy is that radioactive elements might kill healthy cells as well, resulting in permanent damage. Patients often find radiation therapy as a last resort since it can cause life-long damages on their health.",
    },
    "embolism": {
        title: "Embolism",
        description: "Embolism is a palliative cancer treatment that basically block tumors from blood. It can be repeated several times; however, one thing that bothers patients most about embolism is that it would also block the nearby healthy cells from getting enough nutrients from blood. Patients who find themselves incapable of undergoing surgery or ablations seek for embolism as their last resort.",
    },
};

function showMsg(key) {
    var t = texts[key];
    $("#knowledge").modal();
    $("#knowledge-title").text(t.title);
    $("#knowledge-description").text(t.description);
}