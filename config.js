module.exports = {
    extends: ["docker:pinDigests"],
    packageRules: [
        {
            matchDepTypes: ["syntax"],
            enabled: "false",
        },
    ],
    enabledManagers: ["dockerfile"],
};
