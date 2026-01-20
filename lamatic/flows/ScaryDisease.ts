const flowConfig = {
  "id": "10e4acb8-22e1-423a-ba70-096ccb390037",
  "name": "Scary Disease",
  "edges": [
    {
      "id": "triggerNode_1-fullTextSearchNode_707-804",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "fullTextSearchNode_707",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "fullTextSearchNode_707-plus-node-addNode_514299-407",
      "type": "defaultEdge",
      "source": "fullTextSearchNode_707",
      "target": "plus-node-addNode_514299",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    }
  ],
  "status": "active",
  "created_at": "2026-01-20T02:36:38.498398+00:00",
  "trigger_id": 13,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "modes": {},
        "nodeId": "gmailNode",
        "values": {
          "id": "triggerNode_1",
          "action": "GMAIL_NEW_GMAIL_MESSAGE",
          "nodeName": "Gmail",
          "credentials": "Gmail OAuth"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 0
      },
      "selected": false
    },
    {
      "id": "fullTextSearchNode_707",
      "data": {
        "label": "New",
        "logic": [],
        "modes": {},
        "nodeId": "fullTextSearchNode",
        "values": {
          "id": "fullTextSearchNode_707",
          "limit": "3",
          "autocut": "0",
          "filters": "",
          "nodeName": "Keyword Search",
          "vectorDB": "search",
          "searchQuery": "{{triggerNode_1.output.message_text}}",
          "boostProperties": false
        }
      },
      "type": "dynamicNode",
      "measured": {
        "width": 216,
        "height": 93
      },
      "position": {
        "x": 0,
        "y": 130
      },
      "selected": false
    },
    {
      "id": "plus-node-addNode_514299",
      "data": {
        "label": "+",
        "nodeId": "addNode",
        "values": {}
      },
      "type": "addNode",
      "measured": {
        "width": 216,
        "height": 100
      },
      "position": {
        "x": 0,
        "y": 260
      }
    }
  ]
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}